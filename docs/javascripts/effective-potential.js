// Эффективный потенциал Шварцшильда для массивных частиц (гл. 7), G = c = 1, M = 1
(function () {
  function init() {
    const canvas = document.getElementById("veff-canvas");
    if (!canvas || canvas.dataset.ready) return;
    canvas.dataset.ready = "1";
    const ctx = canvas.getContext("2d");
    const slider = document.getElementById("veff-L");
    const out = document.getElementById("veff-L-val");
    const info = document.getElementById("veff-info");
    const W = canvas.width, H = canvas.height;
    const pad = { l: 46, r: 12, t: 12, b: 34 };
    const rMin = 2, rMax = 40;
    const css = (n, fb) => getComputedStyle(document.body).getPropertyValue(n).trim() || fb;

    // V~(r) = (1 - 2/r)(1 + L^2/r^2): E^2 = (dr/dτ)^2 + V~
    const V = (r, L) => (1 - 2 / r) * (1 + L * L / (r * r));
    // ньютоновский аналог: 1 - 2/r + L^2/r^2
    const VN = (r, L) => 1 - 2 / r + L * L / (r * r);

    function draw() {
      const L = parseFloat(slider.value);
      out.textContent = L.toFixed(2);
      const fg = css("--md-default-fg-color--light", "#666");
      const faint = css("--md-default-fg-color--lighter", "#bbb");
      const blue = "#3f6ad8", gold = "#e0a526", red = "#c0392b";

      // экстремумы
      const D = L ** 4 - 12 * L * L;
      let rs = null, ru = null;
      if (D >= 0 && L > 0) {
        rs = (L * L + Math.sqrt(D)) / 2; // устойчивая
        ru = (L * L - Math.sqrt(D)) / 2; // неустойчивая
      }
      const vTop = Math.min(1.8, Math.max(1.08, ru ? V(ru, L) + 0.05 : 1.08));
      const vBot = 0.7;
      const X = (r) => pad.l + (r - rMin) / (rMax - rMin) * (W - pad.l - pad.r);
      const Y = (v) => pad.t + (vTop - v) / (vTop - vBot) * (H - pad.t - pad.b);

      ctx.clearRect(0, 0, W, H);
      // оси и подписи
      ctx.strokeStyle = fg; ctx.lineWidth = 1; ctx.fillStyle = fg; ctx.font = "12px sans-serif";
      ctx.beginPath(); ctx.moveTo(pad.l, pad.t); ctx.lineTo(pad.l, H - pad.b); ctx.lineTo(W - pad.r, H - pad.b); ctx.stroke();
      for (let r = 5; r <= rMax; r += 5) { ctx.fillText(r, X(r) - 6, H - pad.b + 15); }
      for (let v = 0.8; v <= vTop + 1e-9; v += 0.1) ctx.fillText(v.toFixed(1), 8, Y(v) + 4);
      ctx.font = "italic 14px serif";
      ctx.fillText("r / M", W - 50, H - 4);
      // уровень E^2 = 1 (граница связанных орбит)
      ctx.setLineDash([2, 4]); ctx.strokeStyle = faint;
      ctx.beginPath(); ctx.moveTo(pad.l, Y(1)); ctx.lineTo(W - pad.r, Y(1)); ctx.stroke();
      // ISCO r = 6M
      ctx.setLineDash([6, 4]); ctx.strokeStyle = red;
      ctx.beginPath(); ctx.moveTo(X(6), pad.t); ctx.lineTo(X(6), H - pad.b); ctx.stroke();
      ctx.setLineDash([]); ctx.fillStyle = red; ctx.font = "12px sans-serif";
      ctx.fillText("ISCO", X(6) + 4, pad.t + 12);

      function curve(f, color, width, dash) {
        ctx.save();
        ctx.beginPath(); ctx.rect(pad.l, pad.t, W - pad.l - pad.r, H - pad.t - pad.b); ctx.clip();
        ctx.setLineDash(dash || []); ctx.strokeStyle = color; ctx.lineWidth = width;
        ctx.beginPath();
        for (let i = 0; i <= 600; i++) {
          const r = rMin + (rMax - rMin) * i / 600;
          i === 0 ? ctx.moveTo(X(r), Y(f(r))) : ctx.lineTo(X(r), Y(f(r)));
        }
        ctx.stroke(); ctx.restore();
      }
      curve((r) => VN(r, L), faint, 1.2, [5, 4]);
      curve((r) => V(r, L), blue, 2.5);

      function dot(r, color) {
        ctx.fillStyle = color;
        ctx.beginPath(); ctx.arc(X(r), Y(V(r, L)), 5, 0, 2 * Math.PI); ctx.fill();
      }
      let txt;
      if (rs) {
        dot(rs, blue); dot(ru, gold);
        txt = `устойчивая: r = ${rs.toFixed(2)}M,  неустойчивая: r = ${ru.toFixed(2)}M`;
        if (V(ru, L) > 1) txt += "  (барьер выше E² = 1)";
      } else {
        txt = "L < √12·M ≈ 3.46M: круговых орбит нет, частица падает";
      }
      info.textContent = txt;
    }

    slider.addEventListener("input", draw);
    new MutationObserver(draw).observe(document.body, { attributes: true });
    draw();
  }
  if (typeof document$ !== "undefined") document$.subscribe(init);
  else document.addEventListener("DOMContentLoaded", init);
})();
