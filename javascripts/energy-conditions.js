// Энергетические условия для идеальной жидкости в плоскости (ρ, p) (гл. 6)
(function () {
  function init() {
    const canvas = document.getElementById("ec-canvas");
    if (!canvas || canvas.dataset.ready) return;
    canvas.dataset.ready = "1";
    const ctx = canvas.getContext("2d");
    const sr = document.getElementById("ec-rho"), sp = document.getElementById("ec-p");
    const outR = document.getElementById("ec-rho-val"), outP = document.getElementById("ec-p-val");
    const status = document.getElementById("ec-status");
    const W = canvas.width, H = canvas.height, S = W / 3; // окно ρ ∈ [-1.5,1.5], p ∈ [-1.5,1.5]
    const css = (n, fb) => getComputedStyle(document.body).getPropertyValue(n).trim() || fb;
    const X = (r) => W / 2 + r * S, Y = (p) => H / 2 - p * S;

    // области: функция-предикат и цвет
    const conds = [
      ["NEC", (r, p) => r + p >= 0, "rgba(224,165,38,0.18)"],
      ["WEC", (r, p) => r >= 0 && r + p >= 0, "rgba(63,106,216,0.16)"],
      ["SEC", (r, p) => r + p >= 0 && r + 3 * p >= 0, "rgba(142,68,173,0.16)"],
      ["DEC", (r, p) => r >= Math.abs(p), "rgba(40,160,90,0.20)"],
    ];

    function draw() {
      const r = parseFloat(sr.value), p = parseFloat(sp.value);
      outR.textContent = r.toFixed(2); outP.textContent = p.toFixed(2);
      const fg = css("--md-default-fg-color--light", "#666");
      ctx.clearRect(0, 0, W, H);
      const step = 4;
      for (const [, f, col] of conds) {
        ctx.fillStyle = col;
        for (let i = 0; i < W; i += step)
          for (let j = 0; j < H; j += step) {
            const rr = (i + step / 2 - W / 2) / S, pp = (H / 2 - j - step / 2) / S;
            if (f(rr, pp)) ctx.fillRect(i, j, step, step);
          }
      }
      ctx.strokeStyle = fg; ctx.lineWidth = 1.2;
      ctx.beginPath(); ctx.moveTo(0, Y(0)); ctx.lineTo(W, Y(0));
      ctx.moveTo(X(0), 0); ctx.lineTo(X(0), H); ctx.stroke();
      ctx.fillStyle = fg; ctx.font = "italic 16px serif";
      ctx.fillText("ρ", W - 16, Y(0) - 6); ctx.fillText("p", X(0) + 6, 16);
      // характерные уравнения состояния
      ctx.font = "12px sans-serif";
      const marks = [[1, 0, "пыль"], [1, 1 / 3, "излучение"], [1, -1, "Λ"], [1, -1 / 3, "w=−1/3"]];
      for (const [mr, mp, name] of marks) {
        ctx.beginPath(); ctx.arc(X(mr), Y(mp), 3, 0, 2 * Math.PI); ctx.fill();
        ctx.fillText(name, X(mr) + 6, Y(mp) + 4);
      }
      // текущая точка
      ctx.fillStyle = "#e0a526";
      ctx.beginPath(); ctx.arc(X(r), Y(p), 7, 0, 2 * Math.PI); ctx.fill();
      status.textContent = conds.map(([n, f]) => n + (f(r, p) ? " ✓" : " ✗")).join("   ");
    }

    sr.addEventListener("input", draw); sp.addEventListener("input", draw);
    new MutationObserver(draw).observe(document.body, { attributes: true });
    draw();
  }
  if (typeof document$ !== "undefined") document$.subscribe(init);
  else document.addEventListener("DOMContentLoaded", init);
})();
