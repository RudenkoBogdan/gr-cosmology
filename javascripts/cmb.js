// Игрушечный спектр анизотропии CMB: D_l = l(l+1)C_l/2π (качественная модель!)
(function () {
  function cmbModel(obh2, omh2, h) {
    const ogh2 = 2.47e-5, orh2 = ogh2 * (1 + 0.2271 * 3.046);
    const OL = 1 - (omh2 + orh2) / (h * h), zs = 1090, c = 299792.458, H0 = 100 * h;
    const E = (z) => Math.sqrt((omh2 * (1 + z) ** 3 + orh2 * (1 + z) ** 4) / (h * h) + OL);
    const Rz = (z) => (3 * obh2) / (4 * ogh2) / (1 + z);
    // интегралы по u = ln(1+z)
    function integ(f, u1, u2, n) { let s = 0, du = (u2 - u1) / n;
      for (let i = 0; i <= n; i++) { const u = u1 + i * du, w = (i === 0 || i === n) ? 1 : (i % 2 ? 4 : 2);
        s += w * f(Math.exp(u) - 1) * Math.exp(u); } return s * du / 3; }
    const rs = integ((z) => 1 / Math.sqrt(3 * (1 + Rz(z))) / E(z), Math.log(1 + zs), Math.log(1e8), 2000) * c / H0;
    const DM = integ((z) => 1 / E(z), 0, Math.log(1 + zs), 2000) * c / H0;
    const lA = Math.PI * DM / rs, R = Rz(zs);
    const leq = 0.073 * omh2 * DM;               // k_eq D_M
    const lD = 700 * Math.pow(obh2 / 0.02237, 0.25) * Math.pow(omh2 / 0.1424, 0.1) * (lA / 302);
    const phi = 0.33;
    const Dl = (l) => {
      const x = Math.PI * (l / lA + phi);
      const F = 1 + 0.6 * (l * l) / (l * l + leq * leq);       // «радиационный разгон»
      const mono = Math.cos(x) - 0.3 * R;                     // барионная нагрузка
      const dopp = Math.sin(x) / Math.sqrt(1 + R);            // доплеровский член
      const ac = F * F * (mono * mono + 0.3 * dopp * dopp) * Math.exp(-((l / lD) ** 1.6));
      const w = (l * l) / (l * l + (0.45 * lA) ** 2);         // переход к плато Сакса–Вольфа
      return ((1 - w) * 0.30 + w * ac) * (1000 / 0.30);       // мкК^2
    };
    return { rs, DM, lA, R, Dl };
  }

  function init() {
    const canvas = document.getElementById("cmb-canvas");
    if (!canvas || canvas.dataset.ready) return;
    canvas.dataset.ready = "1";
    const ctx = canvas.getContext("2d");
    const sb = document.getElementById("cmb-ob"), sm = document.getElementById("cmb-om");
    const out = (id) => document.getElementById(id);
    const W = canvas.width, H = canvas.height;
    const L = 50, Rm = 12, T = 14, B = 40, lmax = 2000, Dmax = 8000;
    const X = (l) => L + (l / lmax) * (W - L - Rm);
    const Y = (d) => H - B - (d / Dmax) * (H - T - B);
    const css = (name, fb) => getComputedStyle(document.body).getPropertyValue(name).trim() || fb;
    const fid = cmbModel(0.02237, 0.1424, 0.6736);

    function curve(m, color, width, dash) {
      ctx.beginPath(); ctx.setLineDash(dash || []);
      ctx.strokeStyle = color; ctx.lineWidth = width;
      for (let l = 2; l <= lmax; l += 2) {
        const y = Y(Math.min(m.Dl(l), Dmax));
        l === 2 ? ctx.moveTo(X(l), y) : ctx.lineTo(X(l), y);
      }
      ctx.stroke(); ctx.setLineDash([]);
    }

    function draw() {
      const ob = parseFloat(sb.value), om = parseFloat(sm.value);
      const m = cmbModel(ob, om, 0.6736);
      const fg = css("--md-default-fg-color--light", "#666");
      const faint = css("--md-default-fg-color--lightest", "#ddd");
      const dark = document.body.getAttribute("data-md-color-scheme") === "slate";
      const main = dark ? "#e3b46c" : "#3f6ad8";
      ctx.clearRect(0, 0, W, H);
      ctx.font = "12px sans-serif"; ctx.fillStyle = fg;
      for (let l = 0; l <= lmax; l += 250) {
        ctx.strokeStyle = faint; ctx.lineWidth = 0.7;
        ctx.beginPath(); ctx.moveTo(X(l), T); ctx.lineTo(X(l), H - B); ctx.stroke();
        ctx.fillText(String(l), X(l) - 10, H - B + 16);
      }
      for (let d = 0; d <= Dmax; d += 2000) {
        ctx.strokeStyle = faint;
        ctx.beginPath(); ctx.moveTo(L, Y(d)); ctx.lineTo(W - Rm, Y(d)); ctx.stroke();
        ctx.fillText(String(d), 8, Y(d) + 4);
      }
      ctx.fillText("ℓ", W - Rm - 12, H - 6);
      ctx.fillText("Dℓ, мкК²", L + 6, T + 12);
      curve(fid, fg, 1.2, [5, 4]);
      curve(m, main, 2.2);
      // положение первого пика
      let l1 = 100, best = 0;
      for (let l = 100; l < 400; l++) { const v = m.Dl(l); if (v > best) { best = v; l1 = l; } }
      out("cmb-ob-val").textContent = ob.toFixed(4);
      out("cmb-om-val").textContent = om.toFixed(3);
      out("cmb-rs").textContent = m.rs.toFixed(1);
      out("cmb-la").textContent = m.lA.toFixed(0);
      out("cmb-l1").textContent = l1;
      out("cmb-R").textContent = m.R.toFixed(2);
    }

    sb.addEventListener("input", draw);
    sm.addEventListener("input", draw);
    new MutationObserver(draw).observe(document.body, { attributes: true });
    draw();
  }

  if (typeof document$ !== "undefined") document$.subscribe(init);
  else document.addEventListener("DOMContentLoaded", init);
})();
