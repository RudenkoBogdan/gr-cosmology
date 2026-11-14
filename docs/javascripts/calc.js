// Кнопка «Свернуть» в конце блоков ??? calc и возврат к месту, где блок был открыт
(function () {
  function init() {
    document.querySelectorAll("details.calc").forEach((box) => {
      if (box.querySelector(":scope > .calc-close")) return;
      const bar = document.createElement("div");
      bar.className = "calc-close";
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = "▲ Свернуть вычисления";
      btn.addEventListener("click", () => {
        box.open = false;
        const summary = box.querySelector(":scope > summary");
        const top = summary.getBoundingClientRect().top;
        if (top < 0 || top > window.innerHeight) {
          summary.scrollIntoView({ block: "center" });
        }
      });
      bar.appendChild(btn);
      box.appendChild(bar);
    });
  }
  if (typeof document$ !== "undefined") document$.subscribe(init);
  else document.addEventListener("DOMContentLoaded", init);
})();
