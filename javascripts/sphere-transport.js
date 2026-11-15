// Параллельный перенос вдоль параллели θ = θ0 на единичной сфере (голономия)
(function () {
  function init() {
    const canvas = document.getElementById("transport-canvas");
    if (!canvas || canvas.dataset.ready) return;
    canvas.dataset.ready = "1";
    const ctx = canvas.getContext("2d");
    const thS = document.getElementById("transport-theta");
    const phS = document.getElementById("transport-phi");
    const thOut = document.getElementById("transport-theta-val");
    const phOut = document.getElementById("transport-phi-val");
    const angOut = document.getElementById("transport-angle");
    const W = canvas.width, H = canvas.height, R = W * 0.38;
    const tilt = 0.45; // наклон камеры (рад) вокруг оси x

    const css = (name, fb) =>
      getComputedStyle(document.body).getPropertyValue(name).trim() || fb;

    // поворот вокруг оси x на угол tilt, затем ортографическая проекция на (x, z)
    function view(p) {
      const c = Math.cos(tilt), s = Math.sin(tilt);
      return [p[0], c * p[1] - s * p[2], s * p[1] + c * p[2]]; // [x, depth y, up z]
    }
    const SX = (q) => W / 2 + R * q[0];
    const SY = (q) => H / 2 - R * q[2];
    const visible = (q) => q[1] <= 0.02; // ближняя полусфера: y' < 0

    const pos = (th, ph) => [Math.sin(th) * Math.cos(ph), Math.sin(th) * Math.sin(ph), Math.cos(th)];
    const eth = (th, ph) => [Math.cos(th) * Math.cos(ph), Math.cos(th) * Math.sin(ph), -Math.sin(th)];
    const eph = (th, ph) => [-Math.sin(ph), Math.cos(ph), 0];

    function curve(fn, n, color, width, dashedBack) {
      let prev = null;
      for (let i = 0; i <= n; i++) {
        const q = view(fn(i / n));
        if (prev) {
          const vis = visible(q) && visible(prev);
          if (vis || dashedBack) {
            ctx.beginPath();
            ctx.setLineDash(vis ? [] : [3, 4]);
            ctx.strokeStyle = color;
            ctx.globalAlpha = vis ? 1 : 0.45;
            ctx.lineWidth = width;
            ctx.moveTo(SX(prev), SY(prev));
            ctx.lineTo(SX(q), SY(q));
            ctx.stroke();
          }
        }
        prev = q;
      }
      ctx.setLineDash([]);
      ctx.globalAlpha = 1;
    }

    function arrow(p, v, color, width, alpha) {
      const L = 0.28;
      const a = view(p), b = view([p[0] + L * v[0], p[1] + L * v[1], p[2] + L * v[2]]);
      ctx.globalAlpha = (visible(a) ? 1 : 0.35) * alpha;
      ctx.strokeStyle = ctx.fillStyle = color;
      ctx.lineWidth = width;
      const x1 = SX(a), y1 = SY(a), x2 = SX(b), y2 = SY(b);
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
      const ang = Math.atan2(y2 - y1, x2 - x1), h = 8;
      ctx.beginPath();
      ctx.moveTo(x2, y2);
      ctx.lineTo(x2 - h * Math.cos(ang - 0.4), y2 - h * Math.sin(ang - 0.4));
      ctx.lineTo(x2 - h * Math.cos(ang + 0.4), y2 - h * Math.sin(ang + 0.4));
      ctx.closePath(); ctx.fill();
      ctx.globalAlpha = 1;
    }

    // перенесённый вектор: V = cos(c φ) e_θ - sin(c φ) e_φ, c = cos θ0
    function transported(th, ph) {
      const c = Math.cos(th), a = Math.cos(c * ph), b = -Math.sin(c * ph);
      const e1 = eth(th, ph), e2 = eph(th, ph);
      return [a * e1[0] + b * e2[0], a * e1[1] + b * e2[1], a * e1[2] + b * e2[2]];
    }

    function draw() {
      const th = (parseFloat(thS.value) * Math.PI) / 180;
      const phMax = (parseFloat(phS.value) * Math.PI) / 180;
      thOut.textContent = thS.value + "°";
      phOut.textContent = phS.value + "°";
      let hol = (2 * Math.PI * (1 - Math.cos(th))) % (2 * Math.PI);
      angOut.textContent = ((hol * 180) / Math.PI).toFixed(1) + "°";

      const fg = css("--md-default-fg-color--light", "#666");
      const faint = css("--md-default-fg-color--lightest", "#ddd");
      const accent = css("--md-accent-fg-color", "#e0a526");
      const blue = css("--md-typeset-a-color", "#3f6ad8");
      ctx.clearRect(0, 0, W, H);

      // контур сферы
      ctx.beginPath();
      ctx.strokeStyle = fg; ctx.lineWidth = 1.5;
      ctx.arc(W / 2, H / 2, R, 0, 2 * Math.PI); ctx.stroke();

      // сетка
      for (let k = 1; k < 6; k++) {
        const t = (k * Math.PI) / 6;
        curve((u) => pos(t, 2 * Math.PI * u), 120, faint, 1, false);
      }
      for (let k = 0; k < 12; k++) {
        const p = (k * Math.PI) / 6;
        curve((u) => pos(Math.PI * u, p), 60, faint, 1, false);
      }

      // шапка: выбранная параллель целиком и пройденный участок
      curve((u) => pos(th, 2 * Math.PI * u), 200, blue, 1.2, true);
      if (phMax > 0) curve((u) => pos(th, phMax * u), 200, blue, 3, false);

      // исходный вектор (бледный) и перенесённые
      arrow(pos(th, 0), eth(th, 0), fg, 2.5, 0.8);
      const n = Math.max(1, Math.round((phMax / (2 * Math.PI)) * 16));
      for (let i = 1; i <= n; i++) {
        const ph = (phMax * i) / n;
        arrow(pos(th, ph), transported(th, ph), accent, i === n ? 3 : 1.8, i === n ? 1 : 0.7);
      }

      // северный полюс
      const np = view([0, 0, 1]);
      ctx.fillStyle = fg;
      ctx.beginPath(); ctx.arc(SX(np), SY(np), 3, 0, 2 * Math.PI); ctx.fill();
    }

    thS.addEventListener("input", draw);
    phS.addEventListener("input", draw);
    new MutationObserver(draw).observe(document.body, { attributes: true });
    draw();
  }

  if (typeof document$ !== "undefined") document$.subscribe(init);
  else document.addEventListener("DOMContentLoaded", init);
})();
