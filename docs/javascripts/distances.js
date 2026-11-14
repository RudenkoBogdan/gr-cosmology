// Интерактив: космологические расстояния d_C, d_L, d_A как функции z
(function () {
  function init() {
    const canvas = document.getElementById("distances-canvas");
    if (!canvas || canvas.dataset.ready) return;
    canvas.dataset.ready = "1";
    const ctx = canvas.getContext("2d");
    const sm = document.getElementById("distances-om");
    const sl = document.getElementById("distances-ol");
    const sh = document.getElementById("distances-h");
    const out = (id) => document.getElementById(id);
    const W = canvas.width, H = canvas.height;
    const zMax = 5, Dmax = 30; // Гпк
    const pad = { l: 40, r: 12, t: 12, b: 34 };
    const X = (z) => pad.l + z / zMax * (W - pad.l - pad.r);
    const Y = (d) => H - pad.b - d / Dmax * (H - pad.t - pad.b);
    const css = (n, fb) => getComputedStyle(document.body).getPropertyValue(n).trim() || fb;
    const Or = 9e-5;

    // массив z и d_M(z) в Гпк; интегрирование трапециями на мелкой сетке
    function compute(Om, OL, h) {
      const Ok = 1 - Om - OL - Or;
      const dH = 299792.458 / (100 * h) / 1000; // Гпк
      const N = 1000, dz = zMax / N;
      const zs = [0], dC = [0], dM = [0];
      const invE = (z) => {
        const E2 = Or * (1 + z) ** 4 + Om * (1 + z) ** 3 + Ok * (1 + z) ** 2 + OL;
        return E2 > 0 ? 1 / Math.sqrt(E2) : NaN;
      };
      let chi = 0, ok = true;
      for (let i = 1; i <= N; i++) {
        const z = i * dz;
        const f = 0.5 * (invE(z - dz) + invE(z)) * dz;
        if (!isFinite(f)) { ok = false; break; }
        chi += f;
        const s = Math.sqrt(Math.abs(Ok));
        const m = Ok > 1e-6 ? Math.sinh(s * chi) / s : Ok < -1e-6 ? Math.sin(s * chi) / s : chi;
        zs.push(z); dC.push(dH * chi); dM.push(dH * m);
      }
      return { zs, dC, dM, ok, Ok };
    }

    function draw() {
      const Om = +sm.value, OL = +sl.value, h = +sh.value;
      out("distances-om-val").textContent = Om.toFixed(2);
      out("distances-ol-val").textContent = OL.toFixed(2);
      out("distances-h-val").textContent = h.toFixed(2);
      const r = compute(Om, OL, h);
      out("distances-ok").textContent = r.Ok.toFixed(3);
      const i1 = r.zs.findIndex((z) => z >= 1 - 1e-9);
      if (i1 > 0) {
        out("distances-z1").textContent =
          `d_C = ${(1000 * r.dC[i1]).toFixed(0)}, d_L = ${(2000 * r.dM[i1]).toFixed(0)}, d_A = ${(500 * r.dM[i1]).toFixed(0)} Мпк`;
        let best = 0, zb = 0;
        r.zs.forEach((z, i) => { const dA = r.dM[i] / (1 + z); if (dA > best) { best = dA; zb = z; } });
        out("distances-amax").textContent = zb < zMax - 0.01
          ? `${(1000 * best).toFixed(0)} Мпк при z = ${zb.toFixed(2)}` : "нет максимума при z < 5";
      } else {
        out("distances-z1").textContent = "модель без Большого взрыва до z = 1";
        out("distances-amax").textContent = "—";
      }

      const fg = css("--md-default-fg-color--light", "#666");
      const faint = css("--md-default-fg-color--lightest", "#ddd");
      const cols = { C: css("--md-default-fg-color", "#333"), L: "#d0533b", A: "#3f6ad8" };
      ctx.clearRect(0, 0, W, H);
      ctx.font = "12px sans-serif"; ctx.lineWidth = 1;
      for (let z = 0; z <= zMax; z++) {
        ctx.strokeStyle = faint; ctx.beginPath(); ctx.moveTo(X(z), Y(0)); ctx.lineTo(X(z), Y(Dmax)); ctx.stroke();
        ctx.fillStyle = fg; ctx.fillText(z, X(z) - 3, H - pad.b + 16);
      }
      for (let d = 0; d <= Dmax; d += 5) {
        ctx.strokeStyle = faint; ctx.beginPath(); ctx.moveTo(X(0), Y(d)); ctx.lineTo(X(zMax), Y(d)); ctx.stroke();
        ctx.fillStyle = fg; ctx.fillText(d, 12, Y(d) + 4);
      }
      ctx.fillText("z", W - 20, H - pad.b + 16);
      ctx.fillText("Гпк", 6, pad.t + 8);

      ctx.save();
      ctx.beginPath(); ctx.rect(pad.l, pad.t, W - pad.l - pad.r, H - pad.t - pad.b); ctx.clip();
      const series = [
        ["C", (i) => r.dC[i]],
        ["L", (i) => (1 + r.zs[i]) * r.dM[i]],
        ["A", (i) => r.dM[i] / (1 + r.zs[i])],
      ];
      for (const [k, f] of series) {
        ctx.strokeStyle = cols[k]; ctx.lineWidth = 2.5; ctx.beginPath();
        r.zs.forEach((z, i) => (i ? ctx.lineTo(X(z), Y(f(i))) : ctx.moveTo(X(z), Y(f(i)))));
        ctx.stroke();
      }
      ctx.restore();
      ctx.font = "italic 14px serif";
      [["C", "d_C"], ["L", "d_L"], ["A", "d_A"]].forEach(([k, t], j) => {
        ctx.fillStyle = cols[k]; ctx.fillText(t, pad.l + 12, pad.t + 18 + 18 * j);
      });
    }

    [sm, sl, sh].forEach((s) => s.addEventListener("input", draw));
    new MutationObserver(draw).observe(document.body, { attributes: true });
    draw();
  }
  if (typeof document$ !== "undefined") document$.subscribe(init);
  else document.addEventListener("DOMContentLoaded", init);
})();
