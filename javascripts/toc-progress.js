// Ползунок в правом оглавлении: показывает, какие подразделы сейчас на экране
(function () {
  let raf = 0;

  function update() {
    raf = 0;
    const nav = document.querySelector(".md-sidebar--secondary .md-nav--secondary");
    const thumb = nav && nav.querySelector(".toc-thumb");
    if (!thumb) return;
    const links = [...nav.querySelectorAll("a.md-nav__link")];
    const pairs = links
      .map((a) => [a, document.getElementById(decodeURIComponent(a.hash.slice(1)))])
      .filter(([, h]) => h);
    if (!pairs.length) return;

    const viewTop = 80, viewBottom = window.innerHeight;
    const navTop = nav.getBoundingClientRect().top;
    let first = null, last = null;
    pairs.forEach(([a, h], i) => {
      const start = h.getBoundingClientRect().top;
      const next = pairs[i + 1];
      const end = next ? next[1].getBoundingClientRect().top : document.body.scrollHeight;
      if (end > viewTop && start < viewBottom) {
        if (!first) first = a;
        last = a;
      }
    });
    if (!first) first = last = pairs[0][0];
    const r1 = first.getBoundingClientRect(), r2 = last.getBoundingClientRect();
    thumb.style.top = r1.top - navTop - nav.querySelector(".toc-track").offsetTop + "px";
    thumb.style.height = Math.max(r2.bottom - r1.top, 12) + "px";
  }

  function schedule() { if (!raf) raf = requestAnimationFrame(update); }

  function init() {
    const nav = document.querySelector(".md-sidebar--secondary .md-nav--secondary");
    if (!nav || nav.querySelector(".toc-track")) return schedule();
    const track = document.createElement("div");
    track.className = "toc-track";
    const thumb = document.createElement("div");
    thumb.className = "toc-thumb";
    track.appendChild(thumb);
    nav.prepend(track);
    schedule();
  }

  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);
  if (typeof document$ !== "undefined") document$.subscribe(init);
  else document.addEventListener("DOMContentLoaded", init);
})();
