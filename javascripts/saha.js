// Доля ионизации водорода по уравнению Саха как функция z (ħ = c = k_B = 1, эВ)
(function () {
  function init() {
    const canvas = document.getElementById("saha-canvas");
    if (!canvas || canvas.dataset.ready) return;
    canvas.dataset.ready = "1";
    const ctx = canvas.getContext("2d");
    const slider = document.getElementById("saha-ob");
    const obOut = document.getElementById("saha-ob-val");
    const etaOut = document.getElementById("saha-eta");
    const zOut = document.getElementById("saha-zrec");
    const W = canvas.width, H = canvas.height;
    const pad = { l: 50, r: 15, t: 15, b: 40 };
    const zMin = 600, zMax = 2000;

    const me = 0.51099895e6, B = 13.605693, T0 = 2.7255 * 8.617333e-5, zeta3 = 1.2020569;
    const css = (name, fb) =>
      getComputedStyle(document.body).getPropertyValue(name).trim() || fb;

    function Xe(z, eta) {
      const T = T0 * (1 + z);
      const nb = eta * 2 * zeta3 / (Math.PI * Math.PI) * T * T * T;
      const S = Math.pow(me * T / (2 * Math.PI), 1.5) * Math.exp(-B / T) / nb;
      return (-S + Math.sqrt(S * S + 4 * S)) / 2;
    }
    function zHalf(eta) {
      let a = 300, b = 3000;
      for (let i = 0; i < 60; i++) {
        const m = (a + b) / 2;
        Xe(m, eta) > 0.5 ? (b = m) : (a = m);
      }
      return (a + b) / 2;
    }
    const X = (z) => pad.l + (zMax - z) / (zMax - zMin) * (W - pad.l - pad.r);
    const Y = (x) => H - pad.b - x * (H - pad.t - pad.b);

    function curve(eta, color, width, dash) {
      ctx.beginPath();
      ctx.setLineDash(dash || []);
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      for (let z = zMin; z <= zMax; z += 4) {
        const px = X(z), py = Y(Xe(z, eta));
        z === zMin ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.stroke();
      ctx.setLineDash([]);
    }

    function draw() {
      const ob = Math.pow(10, parseFloat(slider.value));
      const eta = 2.738e-8 * ob;
      const zr = zHalf(eta);
      obOut.textContent = ob.toFixed(4);
      etaOut.textContent = eta.toExponential(2);
      zOut.textContent = zr.toFixed(0);

      const fg = css("--md-default-fg-color--light", "#666");
      const faint = css("--md-default-fg-color--lightest", "#ddd");
      const accent = css("--md-accent-fg-color", "#e0a526");
      const main = css("--md-typeset-a-color", "#3f6ad8");
      ctx.clearRect(0, 0, W, H);

      ctx.font = "12px sans-serif";
      ctx.fillStyle = fg;
      ctx.strokeStyle = faint;
      ctx.lineWidth = 1;
      for (let z = zMin; z <= zMax; z += 200) {
        ctx.beginPath(); ctx.moveTo(X(z), Y(0)); ctx.lineTo(X(z), Y(1)); ctx.stroke();
        ctx.fillText(String(z), X(z) - 14, H - pad.b + 16);
      }
      for (let x = 0; x <= 1.0001; x += 0.25) {
        ctx.beginPath(); ctx.moveTo(X(zMax), Y(x)); ctx.lineTo(X(zMin), Y(x)); ctx.stroke();
        ctx.fillText(x.toFixed(2), 8, Y(x) + 4);
      }
      ctx.font = "italic 15px serif";
      ctx.fillText("z", W / 2, H - 6);
      ctx.fillText("Xₑ", 12, pad.t + 4 + 0);

      curve(2.738e-8 * 0.0224, fg, 1.2, [5, 4]);
      curve(eta, main, 2.5);

      ctx.strokeStyle = accent;
      ctx.lineWidth = 1.5;
      ctx.setLineDash([2, 3]);
      ctx.beginPath(); ctx.moveTo(X(zr), Y(0)); ctx.lineTo(X(zr), Y(1)); ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = accent;
      ctx.beginPath(); ctx.arc(X(zr), Y(0.5), 4, 0, 2 * Math.PI); ctx.fill();
    }

    slider.addEventListener("input", draw);
    new MutationObserver(draw).observe(document.body, { attributes: true });
    draw();
  }

  if (typeof document$ !== "undefined") document$.subscribe(init);
  else document.addEventListener("DOMContentLoaded", init);
})();
