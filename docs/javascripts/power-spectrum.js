// Линейный спектр мощности материи P(k) с передаточной функцией BBKS, нормировка sigma_8
(function () {
  const SIGMA8 = 0.811;

  function T(k, G) {
    const q = k / G;
    return Math.log(1 + 2.34 * q) / (2.34 * q) *
      Math.pow(1 + 3.89 * q + Math.pow(16.1 * q, 2) + Math.pow(5.46 * q, 3) + Math.pow(6.71 * q, 4), -0.25);
  }
  function W(x) { return x < 1e-3 ? 1 : 3 * (Math.sin(x) - x * Math.cos(x)) / (x * x * x); }

  // спектр, нормированный на sigma_8; Gamma = Omega_m h (без барионной поправки)
  function model(G, ns) {
    const N = 3000, l0 = Math.log(1e-5), l1 = Math.log(1e3), d = (l1 - l0) / N;
    let s = 0;
    for (let i = 0; i <= N; i++) {
      const k = Math.exp(l0 + i * d), w = (i === 0 || i === N) ? 0.5 : 1;
      const p = Math.pow(k, ns) * T(k, G) ** 2;
      s += w * p * k ** 3 / (2 * Math.PI ** 2) * W(8 * k) ** 2 * d;
    }
    const A = SIGMA8 * SIGMA8 / s;
    return (k) => A * Math.pow(k, ns) * T(k, G) ** 2;
  }

  function init() {
    const canvas = document.getElementById("pk-canvas");
    if (!canvas || canvas.dataset.ready) return;
    canvas.dataset.ready = "1";
    const ctx = canvas.getContext("2d");
    const sG = document.getElementById("pk-omh"), sN = document.getElementById("pk-ns");
    const out = (id) => document.getElementById(id);
    const W_ = canvas.width, H = canvas.height;
    const L = 56, Rm = 12, Tp = 12, B = 40;
    const kmin = -3, kmax = 1, pmin = 0, pmax = 5;      // log10
    const X = (lk) => L + (lk - kmin) / (kmax - kmin) * (W_ - L - Rm);
    const Y = (lp) => H - B - (lp - pmin) / (pmax - pmin) * (H - Tp - B);
    const css = (n, fb) => getComputedStyle(document.body).getPropertyValue(n).trim() || fb;
    const ref = model(0.674 * 0.315, 0.965);

    function curve(P, color, width, dash) {
      ctx.beginPath();
      ctx.setLineDash(dash || []);
      ctx.strokeStyle = color; ctx.lineWidth = width;
      let first = true;
      for (let lk = kmin; lk <= kmax + 1e-9; lk += 0.01) {
        const lp = Math.log10(P(Math.pow(10, lk)));
        const y = Y(Math.max(pmin - 0.5, Math.min(pmax + 0.5, lp)));
        first ? ctx.moveTo(X(lk), y) : ctx.lineTo(X(lk), y);
        first = false;
      }
      ctx.stroke(); ctx.setLineDash([]);
    }

    function draw() {
      const G = parseFloat(sG.value), ns = parseFloat(sN.value);
      const P = model(G, ns);
      const fg = css("--md-default-fg-color--light", "#666");
      const faint = css("--md-default-fg-color--lightest", "#ddd");
      const blue = "#3f6ad8", gold = "#e0a526";
      ctx.clearRect(0, 0, W_, H);

      ctx.font = "12px sans-serif"; ctx.fillStyle = fg;
      for (let e = kmin; e <= kmax; e++) {
        ctx.strokeStyle = faint; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(X(e), Tp); ctx.lineTo(X(e), H - B); ctx.stroke();
        ctx.fillText("10" + (e < 0 ? "⁻" : "") + "⁰¹²³⁴⁵"[Math.abs(e)], X(e) - 10, H - B + 16);
      }
      for (let e = pmin; e <= pmax; e++) {
        ctx.strokeStyle = faint;
        ctx.beginPath(); ctx.moveTo(L, Y(e)); ctx.lineTo(W_ - Rm, Y(e)); ctx.stroke();
        ctx.fillText("10" + "⁰¹²³⁴⁵"[e], L - 32, Y(e) + 4);
      }
      ctx.fillText("k, h/Мпк", W_ - Rm - 60, H - 6);
      ctx.save(); ctx.translate(14, Tp + 110); ctx.rotate(-Math.PI / 2);
      ctx.fillText("P(k), (Мпк/h)³", 0, 0); ctx.restore();

      curve(ref, fg, 1.2, [5, 4]);
      curve(P, blue, 2.5);

      // максимум спектра
      let best = 0, lkp = kmin;
      for (let lk = kmin; lk <= kmax; lk += 0.002) {
        const v = P(Math.pow(10, lk)); if (v > best) { best = v; lkp = lk; }
      }
      ctx.fillStyle = gold;
      ctx.beginPath(); ctx.arc(X(lkp), Y(Math.log10(best)), 5, 0, 2 * Math.PI); ctx.fill();

      out("pk-omh-val").textContent = G.toFixed(3);
      out("pk-ns-val").textContent = ns.toFixed(3);
      out("pk-kpeak").textContent = Math.pow(10, lkp).toFixed(4);
      out("pk-pmax").textContent = best.toExponential(2);
    }

    sG.addEventListener("input", draw);
    sN.addEventListener("input", draw);
    new MutationObserver(draw).observe(document.body, { attributes: true });
    draw();
  }

  if (typeof document$ !== "undefined") document$.subscribe(init);
  else document.addEventListener("DOMContentLoaded", init);
})();
