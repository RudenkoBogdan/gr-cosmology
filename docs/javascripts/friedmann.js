// Интерактив: эволюция масштабного фактора a(t) в моделях Фридмана
(function () {
  function init() {
    const canvas = document.getElementById("friedmann-canvas");
    if (!canvas || canvas.dataset.ready) return;
    canvas.dataset.ready = "1";
    const ctx = canvas.getContext("2d");
    const sm = document.getElementById("friedmann-om");
    const sl = document.getElementById("friedmann-ol");
    const sr = document.getElementById("friedmann-or");
    const out = (id) => document.getElementById(id);
    const W = canvas.width, H = canvas.height;
    const h = 0.6766, tH = 977.8 / (100 * h); // 1/H0 в млрд лет
    const tMin = -20, tMax = 40, aMax = 3;   // окно: время от «сейчас», Гyr
    const pad = { l: 46, r: 12, t: 12, b: 34 };
    const X = (t) => pad.l + (t - tMin) / (tMax - tMin) * (W - pad.l - pad.r);
    const Y = (a) => H - pad.b - a / aMax * (H - pad.t - pad.b);
    const css = (n, fb) => getComputedStyle(document.body).getPropertyValue(n).trim() || fb;

    // ä = H0^2 (-Or/a^3 - Om/(2a^2) + OL a); время в единицах 1/H0
    function integrate(Om, OL, Or, dir) {
      const acc = (a) => -Or / (a * a * a) - Om / (2 * a * a) + OL * a;
      let a = 1, v = dir, t = 0; // v = da/d(dir*t), стартуем с ȧ = H0
      const pts = [[0, 1]];
      let end = "open";
      for (let i = 0; i < 200000; i++) {
        const dt = Math.min(0.005 * a / Math.max(Math.abs(v), 1e-9), 0.005);
        // RK4 по (a, v) для d/dτ, τ = dir*t, ускорение не зависит от направления
        const k1a = v, k1v = acc(a);
        const k2a = v + 0.5 * dt * k1v, k2v = acc(Math.max(a + 0.5 * dt * k1a, 1e-9));
        const k3a = v + 0.5 * dt * k2v, k3v = acc(Math.max(a + 0.5 * dt * k2a, 1e-9));
        const k4a = v + dt * k3v, k4v = acc(Math.max(a + dt * k3a, 1e-9));
        a += dt / 6 * (k1a + 2 * k2a + 2 * k3a + k4a);
        v += dt / 6 * (k1v + 2 * k2v + 2 * k3v + k4v);
        t += dt;
        if (a <= 1e-3) { end = "zero"; pts.push([dir * t * tH, 0]); break; }
        pts.push([dir * t * tH, a]);
        if (a > 50 || t * tH > 200) break;
      }
      return { pts, end, t: t * tH, a, v };
    }

    let ref = null;
    function draw() {
      if (!ref) ref = [integrate(0.311, 0.689, 9e-5, -1), integrate(0.311, 0.689, 9e-5, 1)];
      const Om = +sm.value, OL = +sl.value, Or = +sr.value;
      const Ok = 1 - Om - OL - Or;
      out("friedmann-om-val").textContent = Om.toFixed(2);
      out("friedmann-ol-val").textContent = OL.toFixed(2);
      out("friedmann-or-val").textContent = Or.toFixed(3);
      out("friedmann-ok").textContent = Ok.toFixed(3);
      const past = integrate(Om, OL, Or, -1);
      const fut = integrate(Om, OL, Or, +1);
      const q0 = Om / 2 + Or - OL;
      out("friedmann-q0").textContent = q0.toFixed(2);
      out("friedmann-age").textContent = past.end === "zero"
        ? past.t.toFixed(2) + " млрд лет" : "нет Большого взрыва (отскок)";
      let fate;
      if (fut.end === "zero") fate = "Большое сжатие через " + fut.t.toFixed(1) + " млрд лет";
      else if (OL > 0 && fut.v > 0 && OL * fut.a > Om / (2 * fut.a * fut.a)) fate = "вечное ускоренное расширение";
      else fate = "вечное замедляющееся расширение";
      out("friedmann-fate").textContent = fate;

      const fg = css("--md-default-fg-color--light", "#666");
      const faint = css("--md-default-fg-color--lightest", "#ddd");
      const accent = css("--md-accent-fg-color", "#e0a526");
      const blue = "#3f6ad8";
      ctx.clearRect(0, 0, W, H);
      ctx.font = "12px sans-serif";
      ctx.lineWidth = 1;
      for (let t = -20; t <= 40; t += 10) {
        ctx.strokeStyle = faint; ctx.beginPath(); ctx.moveTo(X(t), Y(0)); ctx.lineTo(X(t), Y(aMax)); ctx.stroke();
        ctx.fillStyle = fg; ctx.fillText(t, X(t) - 8, H - pad.b + 16);
      }
      for (let a = 0; a <= aMax; a += 0.5) {
        ctx.strokeStyle = faint; ctx.beginPath(); ctx.moveTo(X(tMin), Y(a)); ctx.lineTo(X(tMax), Y(a)); ctx.stroke();
        ctx.fillStyle = fg; ctx.fillText(a.toFixed(1), 8, Y(a) + 4);
      }
      ctx.fillText("t − t₀, млрд лет", W / 2 - 40, H - 4);
      ctx.save(); ctx.translate(14, pad.t + 30); ctx.fillText("a", 0, 0); ctx.restore();
      ctx.strokeStyle = fg; ctx.setLineDash([4, 4]);
      ctx.beginPath(); ctx.moveTo(X(0), Y(0)); ctx.lineTo(X(0), Y(aMax)); ctx.stroke();
      ctx.setLineDash([]);

      function curve(pts, color, w) {
        ctx.save();
        ctx.beginPath(); ctx.rect(pad.l, pad.t, W - pad.l - pad.r, H - pad.t - pad.b); ctx.clip();
        ctx.strokeStyle = color; ctx.lineWidth = w; ctx.beginPath();
        pts.forEach(([t, a], i) => (i ? ctx.lineTo(X(t), Y(a)) : ctx.moveTo(X(t), Y(a))));
        ctx.stroke(); ctx.restore();
      }
      // эталон: Planck 2018
      ref.forEach((r) => curve(r.pts, faint, 3));
      curve(past.pts, blue, 2.5);
      curve(fut.pts, blue, 2.5);
      ctx.fillStyle = accent;
      ctx.beginPath(); ctx.arc(X(0), Y(1), 4.5, 0, 2 * Math.PI); ctx.fill();
    }

    [sm, sl, sr].forEach((s) => s.addEventListener("input", draw));
    new MutationObserver(draw).observe(document.body, { attributes: true });
    draw();
  }
  if (typeof document$ !== "undefined") document$.subscribe(init);
  else document.addEventListener("DOMContentLoaded", init);
})();
