// Медленное скатывание: потенциал V(φ) и точки (n_s, r) для φ², φ⁴, Старобинского (M_Pl = 1)
(function () {
  const s23 = Math.sqrt(2 / 3);
  const models = {
    phi2: {
      name: "m²φ²/2", V: (f) => f * f, fmax: 18,
      eps: (f) => 2 / (f * f), eta: (f) => 2 / (f * f),
      fend: Math.SQRT2, fstar: (N) => Math.sqrt(4 * N + 2),
    },
    phi4: {
      name: "λφ⁴/4", V: (f) => f ** 4, fmax: 25,
      eps: (f) => 8 / (f * f), eta: (f) => 12 / (f * f),
      fend: 2 * Math.SQRT2, fstar: (N) => Math.sqrt(8 * N + 8),
    },
    staro: {
      name: "Старобинский", V: (f) => (1 - Math.exp(-s23 * f)) ** 2, fmax: 8,
      eps: (f) => { const e = Math.exp(-s23 * f); return (4 / 3) * e * e / (1 - e) ** 2; },
      eta: (f) => { const e = Math.exp(-s23 * f); return (4 / 3) * (2 * e * e - e) / (1 - e) ** 2; },
      fend: Math.log(1 + 2 / Math.sqrt(3)) / s23,
      fstar: (N) => {   // N(φ) = (3/4)[e^x - x]_{x_end}^{x}, x = √(2/3) φ
        const xe = Math.log(1 + 2 / Math.sqrt(3)), Ne = Math.exp(xe) - xe;
        let lo = xe, hi = 20;
        for (let i = 0; i < 80; i++) {
          const m = (lo + hi) / 2;
          (0.75 * (Math.exp(m) - m - Ne) < N) ? (lo = m) : (hi = m);
        }
        return lo / s23;
      },
    },
  };
  const obs = (m, N) => {
    const f = m.fstar(N), e = m.eps(f), h = m.eta(f);
    return { f, ns: 1 - 6 * e + 2 * h, r: 16 * e };
  };

  function init() {
    const cv = document.getElementById("inflation-V");
    if (!cv || cv.dataset.ready) return;
    cv.dataset.ready = "1";
    const cr = document.getElementById("inflation-nsr");
    const sel = document.getElementById("inflation-model");
    const sN = document.getElementById("inflation-N");
    const out = (id) => document.getElementById(id);
    const css = (name, fb) => getComputedStyle(document.body).getPropertyValue(name).trim() || fb;
    const colors = { phi2: "#3f6ad8", phi4: "#c0392b", staro: "#2e9e6a" };

    function axes(ctx, W, H, P, xl, yl, fg) {
      ctx.strokeStyle = fg; ctx.lineWidth = 1.2;
      ctx.beginPath(); ctx.moveTo(P.l, P.t); ctx.lineTo(P.l, H - P.b); ctx.lineTo(W - P.r, H - P.b); ctx.stroke();
      ctx.fillStyle = fg; ctx.font = "italic 14px serif";
      ctx.fillText(xl, W - P.r - 30, H - 8);
      ctx.fillText(yl, P.l + 6, P.t + 12);
    }

    function drawV(m, o, fg, col, accent) {
      const ctx = cv.getContext("2d"), W = cv.width, H = cv.height, P = { l: 30, r: 10, t: 10, b: 30 };
      ctx.clearRect(0, 0, W, H);
      const Vmax = m.V(m.fmax);
      const X = (f) => P.l + (f / m.fmax) * (W - P.l - P.r);
      const Y = (v) => H - P.b - (v / Vmax) * (H - P.t - P.b) * 0.9;
      axes(ctx, W, H, P, "φ/M_Pl", "V(φ)", fg);
      ctx.font = "12px sans-serif";
      for (let f = 0; f <= m.fmax; f += m.fmax > 10 ? 5 : 2) ctx.fillText(String(f), X(f) - 4, H - P.b + 14);
      ctx.strokeStyle = col; ctx.lineWidth = 2.2; ctx.beginPath();
      for (let i = 0; i <= 300; i++) {
        const f = (i / 300) * m.fmax; i ? ctx.lineTo(X(f), Y(m.V(f))) : ctx.moveTo(X(f), Y(m.V(f)));
      }
      ctx.stroke();
      // участок последних N е-фолдов
      ctx.strokeStyle = accent; ctx.lineWidth = 5; ctx.globalAlpha = 0.45; ctx.beginPath();
      for (let i = 0; i <= 100; i++) {
        const f = m.fend + (i / 100) * (o.f - m.fend); i ? ctx.lineTo(X(f), Y(m.V(f))) : ctx.moveTo(X(f), Y(m.V(f)));
      }
      ctx.stroke(); ctx.globalAlpha = 1;
      for (const [f, lab] of [[o.f, "φ*"], [m.fend, "φ_end"]]) {
        ctx.fillStyle = accent; ctx.beginPath(); ctx.arc(X(f), Y(m.V(f)), 4.5, 0, 2 * Math.PI); ctx.fill();
        ctx.fillStyle = fg; ctx.font = "italic 13px serif"; ctx.fillText(lab, X(f) - 8, Y(m.V(f)) - 9);
      }
    }

    function drawNsr(key, N, fg, faint, accent) {
      const ctx = cr.getContext("2d"), W = cr.width, H = cr.height, P = { l: 44, r: 10, t: 10, b: 30 };
      const ns0 = 0.935, ns1 = 0.985, lr0 = -3, lr1 = 0;       // r в логарифмическом масштабе
      const X = (ns) => P.l + ((ns - ns0) / (ns1 - ns0)) * (W - P.l - P.r);
      const Y = (r) => H - P.b - ((Math.log10(r) - lr0) / (lr1 - lr0)) * (H - P.t - P.b);
      ctx.clearRect(0, 0, W, H);
      // полоса Planck 2018: n_s = 0.9649 ± 0.0042 (1σ, 2σ) и BICEP/Keck 2021: r < 0.036
      ctx.fillStyle = accent;
      for (const [k, a] of [[2, 0.12], [1, 0.22]]) {
        ctx.globalAlpha = a;
        ctx.fillRect(X(0.9649 - k * 0.0042), Y(0.036), X(0.9649 + k * 0.0042) - X(0.9649 - k * 0.0042), H - P.b - Y(0.036));
      }
      ctx.globalAlpha = 1;
      ctx.strokeStyle = faint; ctx.setLineDash([4, 4]);
      ctx.beginPath(); ctx.moveTo(P.l, Y(0.036)); ctx.lineTo(W - P.r, Y(0.036)); ctx.stroke(); ctx.setLineDash([]);
      axes(ctx, W, H, P, "n_s", "r", fg);
      ctx.font = "12px sans-serif"; ctx.fillStyle = fg;
      for (const ns of [0.94, 0.95, 0.96, 0.97, 0.98]) ctx.fillText(ns.toFixed(2), X(ns) - 12, H - P.b + 14);
      for (const r of [0.001, 0.01, 0.1, 1]) ctx.fillText(String(r), 4, Y(r) + 4);
      ctx.fillText("r < 0.036", W - P.r - 60, Y(0.036) - 4);
      for (const k of Object.keys(models)) {
        const a = obs(models[k], 50), b = obs(models[k], 60), c = obs(models[k], N);
        ctx.strokeStyle = colors[k]; ctx.lineWidth = k === key ? 3 : 1.5;
        ctx.beginPath(); ctx.moveTo(X(a.ns), Y(a.r)); ctx.lineTo(X(b.ns), Y(b.r)); ctx.stroke();
        ctx.fillStyle = colors[k];
        ctx.beginPath(); ctx.arc(X(c.ns), Y(c.r), k === key ? 6 : 3.5, 0, 2 * Math.PI); ctx.fill();
        ctx.font = "12px sans-serif"; ctx.fillText(models[k].name, X(b.ns) + 6, Y(b.r) - 6);
      }
    }

    function draw() {
      const key = sel.value, N = parseFloat(sN.value), m = models[key], o = obs(m, N);
      const fg = css("--md-default-fg-color--light", "#666");
      const faint = css("--md-default-fg-color--lighter", "#aaa");
      const accent = css("--md-accent-fg-color", "#e0a526");
      drawV(m, o, fg, colors[key], accent);
      drawNsr(key, N, fg, faint, accent);
      out("inflation-N-val").textContent = N.toFixed(0);
      out("inflation-ns").textContent = o.ns.toFixed(4);
      out("inflation-r").textContent = o.r < 0.01 ? o.r.toExponential(2) : o.r.toFixed(3);
      out("inflation-phi").textContent = o.f.toFixed(2);
    }

    sel.addEventListener("change", draw);
    sN.addEventListener("input", draw);
    new MutationObserver(draw).observe(document.body, { attributes: true });
    draw();
  }

  if (typeof document$ !== "undefined") document$.subscribe(init);
  else document.addEventListener("DOMContentLoaded", init);
})();
