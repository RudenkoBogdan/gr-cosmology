// Приливная деформация кольца свободно падающих частиц (гл. 5)
(function () {
  function init() {
    const canvas = document.getElementById("tidal-canvas");
    if (!canvas || canvas.dataset.ready) return;
    canvas.dataset.ready = "1";
    const ctx = canvas.getContext("2d");
    const slider = document.getElementById("tidal-s");
    const out = document.getElementById("tidal-s-val");
    const W = canvas.width, H = canvas.height;
    const css = (n, fb) => getComputedStyle(document.body).getPropertyValue(n).trim() || fb;
    const cx = W * 0.6, cy = H / 2, R = H * 0.28, N = 24;

    function arrow(x1, y1, x2, y2, color) {
      const a = Math.atan2(y2 - y1, x2 - x1), h = 6;
      ctx.strokeStyle = ctx.fillStyle = color;
      ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x2, y2);
      ctx.lineTo(x2 - h * Math.cos(a - 0.4), y2 - h * Math.sin(a - 0.4));
      ctx.lineTo(x2 - h * Math.cos(a + 0.4), y2 - h * Math.sin(a + 0.4));
      ctx.fill();
    }

    function draw() {
      const s = parseFloat(slider.value); // s = (GM/r^3) tau^2
      out.textContent = s.toFixed(2);
      const fg = css("--md-default-fg-color--light", "#666");
      const faint = css("--md-default-fg-color--lighter", "#bbb");
      const blue = "#3f6ad8", gold = "#e0a526";
      ctx.clearRect(0, 0, W, H);

      // притягивающее тело слева
      ctx.fillStyle = gold;
      ctx.beginPath(); ctx.arc(W * 0.08, cy, 22, 0, 2 * Math.PI); ctx.fill();
      ctx.fillStyle = fg; ctx.font = "italic 15px serif";
      ctx.fillText("M", W * 0.08 - 7, cy + 45);

      // исходное кольцо
      ctx.setLineDash([4, 4]); ctx.strokeStyle = faint; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, 2 * Math.PI); ctx.stroke();
      ctx.setLineDash([]);

      // деформированное кольцо: x -> x(1 + s), y -> y(1 - s/2)
      for (let k = 0; k < N; k++) {
        const th = 2 * Math.PI * k / N;
        const x0 = R * Math.cos(th), y0 = R * Math.sin(th);
        const x = x0 * (1 + s), y = y0 * (1 - s / 2);
        // приливное ускорение ∝ (2x, -y)
        arrow(cx + x, cy - y, cx + x + 0.12 * 2 * x0, cy - y + 0.12 * y0, faint);
        ctx.fillStyle = blue;
        ctx.beginPath(); ctx.arc(cx + x, cy - y, 4, 0, 2 * Math.PI); ctx.fill();
      }
      ctx.fillStyle = fg; ctx.font = "13px sans-serif";
      ctx.fillText("стрелки — приливное ускорение", 10, H - 12);
    }

    slider.addEventListener("input", draw);
    new MutationObserver(draw).observe(document.body, { attributes: true });
    draw();
  }
  if (typeof document$ !== "undefined") document$.subscribe(init);
  else document.addEventListener("DOMContentLoaded", init);
})();
