// Деформация кольца пробных частиц гравитационной волной (волна вдоль z, к наблюдателю)
(function () {
  function init() {
    const canvas = document.getElementById("gw-ring-canvas");
    if (!canvas || canvas.dataset.ready) return;
    canvas.dataset.ready = "1";
    const ctx = canvas.getContext("2d");
    const polSel = document.getElementById("gw-ring-pol");
    const hSlider = document.getElementById("gw-ring-h");
    const hOut = document.getElementById("gw-ring-h-val");
    const W = canvas.width, H = canvas.height;
    const R = Math.min(W, H) * 0.3, N = 24;
    const omega = 2 * Math.PI * 0.5; // 0.5 оборота в секунду

    const css = (name, fb) =>
      getComputedStyle(document.body).getPropertyValue(name).trim() || fb;
    const dark = () => document.body.getAttribute("data-md-color-scheme") === "slate";

    let t0 = null;
    function frame(ts) {
      if (!document.body.contains(canvas)) return; // страница сменилась
      if (t0 === null) t0 = ts;
      const t = (ts - t0) / 1000;
      const h = parseFloat(hSlider.value);
      hOut.textContent = h.toFixed(2);
      const pol = polSel.value;
      let hp = 0, hx = 0;
      if (pol === "plus") hp = h * Math.cos(omega * t);
      else if (pol === "cross") hx = h * Math.cos(omega * t);
      else { hp = h * Math.cos(omega * t); hx = h * Math.sin(omega * t); }

      const fg = css("--md-default-fg-color--light", "#666");
      const faint = css("--md-default-fg-color--lightest", "#ddd");
      const blue = dark() ? "#8fb0ff" : "#3f6ad8";
      const gold = dark() ? "#f0cd8f" : "#e0a526";
      ctx.clearRect(0, 0, W, H);
      const cx = W / 2, cy = H / 2;

      // оси
      ctx.strokeStyle = faint;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(cx - R * 1.6, cy); ctx.lineTo(cx + R * 1.6, cy);
      ctx.moveTo(cx, cy - R * 1.6); ctx.lineTo(cx, cy + R * 1.6);
      ctx.stroke();
      ctx.fillStyle = fg;
      ctx.font = "italic 16px serif";
      ctx.fillText("x", cx + R * 1.6 - 10, cy - 8);
      ctx.fillText("y", cx + 8, cy - R * 1.6 + 12);

      // исходное кольцо
      ctx.setLineDash([4, 4]);
      ctx.strokeStyle = fg;
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.setLineDash([]);

      // смещённые частицы: δx = ½(h+ x + h× y), δy = ½(h× x − h+ y)
      const pts = [];
      for (let k = 0; k < N; k++) {
        const a = (2 * Math.PI * k) / N;
        const x = Math.cos(a), y = Math.sin(a);
        const X = x + 0.5 * (hp * x + hx * y);
        const Y = y + 0.5 * (hx * x - hp * y);
        pts.push([cx + R * X, cy - R * Y]);
      }
      ctx.strokeStyle = blue;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      pts.forEach(([px, py], i) => (i ? ctx.lineTo(px, py) : ctx.moveTo(px, py)));
      ctx.closePath();
      ctx.stroke();
      pts.forEach(([px, py], i) => {
        ctx.fillStyle = i === 0 ? gold : blue;
        ctx.beginPath();
        ctx.arc(px, py, i === 0 ? 6 : 4.5, 0, 2 * Math.PI);
        ctx.fill();
      });

      ctx.fillStyle = fg;
      ctx.font = "14px sans-serif";
      ctx.fillText(`h+ = ${hp.toFixed(2)}   h× = ${hx.toFixed(2)}`, 12, H - 12);
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  if (typeof document$ !== "undefined") document$.subscribe(init);
  else document.addEventListener("DOMContentLoaded", init);
})();
