// Интерактивная диаграмма Минковского (c = 1)
(function () {
  function init() {
    const canvas = document.getElementById("minkowski-canvas");
    if (!canvas || canvas.dataset.ready) return;
    canvas.dataset.ready = "1";
    const ctx = canvas.getContext("2d");
    const slider = document.getElementById("minkowski-v");
    const vOut = document.getElementById("minkowski-v-val");
    const gOut = document.getElementById("minkowski-gamma");
    const W = canvas.width, H = canvas.height, S = W / 6; // 1 единица = S px, окно [-3,3]

    const css = (name, fb) =>
      getComputedStyle(document.body).getPropertyValue(name).trim() || fb;
    const X = (x) => W / 2 + x * S;
    const Y = (t) => H / 2 - t * S;

    function line(x1, t1, x2, t2, color, width, dash) {
      ctx.beginPath();
      ctx.setLineDash(dash || []);
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.moveTo(X(x1), Y(t1));
      ctx.lineTo(X(x2), Y(t2));
      ctx.stroke();
      ctx.setLineDash([]);
    }

    function hyperbola(sign, color) {
      // sign=+1: x^2 - t^2 = 1 (пространственноподобная), -1: t^2 - x^2 = 1
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 4]);
      for (const branch of [1, -1]) {
        ctx.beginPath();
        for (let u = -2; u <= 2.001; u += 0.02) {
          const a = branch * Math.cosh(u), b = Math.sinh(u);
          const x = sign > 0 ? a : b, t = sign > 0 ? b : a;
          u === -2 ? ctx.moveTo(X(x), Y(t)) : ctx.lineTo(X(x), Y(t));
        }
        ctx.stroke();
      }
      ctx.setLineDash([]);
    }

    function label(text, x, t, color) {
      ctx.fillStyle = color;
      ctx.font = "italic 16px serif";
      ctx.fillText(text, X(x), Y(t));
    }

    function draw() {
      const v = parseFloat(slider.value);
      const g = 1 / Math.sqrt(1 - v * v);
      vOut.textContent = v.toFixed(2);
      gOut.textContent = g.toFixed(3);

      const fg = css("--md-default-fg-color--light", "#666");
      const faint = css("--md-default-fg-color--lightest", "#ddd");
      const blue = "#3f6ad8", gold = "#e0a526";
      ctx.clearRect(0, 0, W, H);

      // сетка штрихованной системы: линии t' = const и x' = const
      for (let k = -6; k <= 6; k++) {
        if (k === 0) continue;
        // x' = k: точки (x,t) = γ(k + v s, v k + s)
        line(g * (k - 3 * v), g * (v * k - 3), g * (k + 3 * v), g * (v * k + 3), faint, 0.7);
        // t' = k
        line(g * (v * k - 3), g * (k - 3 * v), g * (v * k + 3), g * (k + 3 * v), faint, 0.7);
      }

      hyperbola(1, fg);
      hyperbola(-1, fg);

      // световой конус
      line(-3, -3, 3, 3, gold, 2);
      line(-3, 3, 3, -3, gold, 2);

      // покоящиеся оси
      line(-3, 0, 3, 0, fg, 1.5);
      line(0, -3, 0, 3, fg, 1.5);
      label("x", 2.75, -0.25, fg);
      label("t", 0.1, 2.8, fg);

      // движущиеся оси: t' вдоль (v,1), x' вдоль (1,v)
      line(-3 * v, -3, 3 * v, 3, blue, 2.5);
      line(-3, -3 * v, 3, 3 * v, blue, 2.5);
      label("t′", 2.8 * v + 0.1, 2.8, blue);
      label("x′", 2.8, 2.8 * v + 0.15, blue);

      // единичные отметки на осях t' и x'
      ctx.fillStyle = blue;
      for (const [x, t] of [[g * v, g], [g, g * v]]) {
        ctx.beginPath();
        ctx.arc(X(x), Y(t), 4, 0, 2 * Math.PI);
        ctx.fill();
      }
    }

    slider.addEventListener("input", draw);
    new MutationObserver(draw).observe(document.body, { attributes: true });
    draw();
  }

  if (typeof document$ !== "undefined") document$.subscribe(init);
  else document.addEventListener("DOMContentLoaded", init);
})();
