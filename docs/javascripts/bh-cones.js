// Световые конусы вблизи чёрной дыры Шварцшильда (G = c = 1, M = 1)
// Координаты: входящие Эддингтона–Финкельштейна (r, t~ = v - r) или Шварцшильда (r, t).
(function () {
  function init() {
    const canvas = document.getElementById("bh-cones-canvas");
    if (!canvas || canvas.dataset.ready) return;
    canvas.dataset.ready = "1";
    const ctx = canvas.getContext("2d");
    const slider = document.getElementById("bh-cones-r");
    const rOut = document.getElementById("bh-cones-r-val");
    const schwBox = document.getElementById("bh-cones-schw");
    const W = canvas.width, H = canvas.height;
    const R0 = 0, R1 = 8, T0 = -1, T1 = 7;
    const X = (r) => 30 + ((r - R0) / (R1 - R0)) * (W - 40);
    const Y = (t) => H - 30 - ((t - T0) / (T1 - T0)) * (H - 40);

    const css = (name, fb) =>
      getComputedStyle(document.body).getPropertyValue(name).trim() || fb;
    const dark = () => document.body.getAttribute("data-md-color-scheme") === "slate";

    const rstar = (r) => r + 2 * Math.log(Math.abs(r / 2 - 1));

    function curve(fn, rmin, rmax, color, width) {
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.beginPath();
      let pen = false;
      for (let r = rmin; r <= rmax; r += 0.01) {
        const t = fn(r);
        if (!isFinite(t) || t < T0 - 1 || t > T1 + 1) { pen = false; continue; }
        pen ? ctx.lineTo(X(r), Y(t)) : ctx.moveTo(X(r), Y(t));
        pen = true;
      }
      ctx.stroke();
    }

    // будущие изотропные направления (dr, dt) в данной точке
    function nullDirs(r, schw) {
      if (!schw) return [[-1, 1], [r - 2, r + 2]];
      const f = 1 - 2 / r;
      return [[-f, 1], [f, 1]];
    }

    function cone(r, t, size, fill, stroke, schw) {
      const dirs = nullDirs(r, schw).map(([a, b]) => {
        const n = Math.hypot(a, b);
        return [(a / n) * size, (b / n) * size];
      });
      ctx.beginPath();
      ctx.moveTo(X(r), Y(t));
      ctx.lineTo(X(r + dirs[0][0]), Y(t + dirs[0][1]));
      ctx.lineTo(X(r + dirs[1][0]), Y(t + dirs[1][1]));
      ctx.closePath();
      ctx.fillStyle = fill;
      ctx.fill();
      ctx.strokeStyle = stroke;
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    function draw() {
      const r0 = parseFloat(slider.value);
      const schw = schwBox.checked;
      rOut.textContent = r0.toFixed(2);

      const fg = css("--md-default-fg-color--light", "#666");
      const faint = css("--md-default-fg-color--lightest", "#ddd");
      const blue = dark() ? "#8fb0ff" : "#3f6ad8";
      const gold = dark() ? "#f0cd8f" : "#e0a526";
      const red = dark() ? "#ff8a7a" : "#c8402e";
      const coneFill = dark() ? "rgba(143,176,255,0.25)" : "rgba(63,106,216,0.18)";
      const hiFill = dark() ? "rgba(240,205,143,0.45)" : "rgba(224,165,38,0.40)";
      ctx.clearRect(0, 0, W, H);

      // сингулярность r = 0
      ctx.fillStyle = faint;
      ctx.fillRect(X(0) - 12, Y(T1), 12, Y(T0) - Y(T1));

      // изотропные кривые
      for (let c = -12; c <= 16; c += 1) {
        if (schw) {
          curve((r) => -rstar(r) + c, 2.001, R1, gold, 1);
          curve((r) => rstar(r) + c - 4, 2.001, R1, blue, 1);
        } else {
          curve((r) => -r + c, 0, R1, gold, 1);
          curve((r) => c - 4 + r + 4 * Math.log(Math.abs(r / 2 - 1)), 2.001, R1, blue, 1);
          curve((r) => c - 4 + r + 4 * Math.log(Math.abs(r / 2 - 1)), 0.001, 1.999, blue, 1);
        }
      }

      // сетка конусов
      for (let r = 0.5; r < R1; r += 1) {
        for (let t = 0; t < T1; t += 1.5) {
          if (schw && r < 2) continue;
          cone(r, t, 0.45, coneFill, blue, schw);
        }
      }

      // горизонт
      ctx.setLineDash([6, 4]);
      ctx.strokeStyle = red;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(X(2), Y(T0));
      ctx.lineTo(X(2), Y(T1));
      ctx.stroke();
      ctx.setLineDash([]);

      // выделенный конус
      if (!(schw && r0 <= 2.02)) cone(r0, 2.5, 1.0, hiFill, gold, schw);

      // оси и подписи
      ctx.strokeStyle = fg;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(X(0), Y(T0));
      ctx.lineTo(X(R1), Y(T0));
      ctx.stroke();
      ctx.fillStyle = fg;
      ctx.font = "13px sans-serif";
      for (let r = 0; r <= R1; r += 2) ctx.fillText(String(r), X(r) - 4, Y(T0) + 16);
      ctx.font = "italic 16px serif";
      ctx.fillText("r / GM", X(R1) - 50, Y(T0) - 8);
      ctx.fillText(schw ? "t" : "t̃ = v − r", X(0) + 6, Y(T1) + 16);
      ctx.fillStyle = red;
      ctx.fillText("r = 2GM", X(2) + 6, Y(T1) + 36);
      if (schw && r0 <= 2.02) {
        ctx.fillStyle = fg;
        ctx.fillText("координаты (t, r) не покрывают r ≤ 2GM", X(0.3), Y(3));
      }
    }

    slider.addEventListener("input", draw);
    schwBox.addEventListener("change", draw);
    new MutationObserver(draw).observe(document.body, { attributes: true });
    draw();
  }

  if (typeof document$ !== "undefined") document$.subscribe(init);
  else document.addEventListener("DOMContentLoaded", init);
})();
