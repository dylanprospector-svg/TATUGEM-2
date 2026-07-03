/* =====================================================================
   BELL'S TATTOO & PIERCING — script.js
   Interações: header ao rolar, menu mobile, scroll reveal,
   botão flutuante do WhatsApp, ano dinâmico.
   HTML + CSS + JS puros, sem dependências.
   ===================================================================== */
(function () {
  "use strict";

  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Ano dinâmico ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Header: fundo translúcido ao rolar + botão flutuante ---------- */
  var header = document.getElementById("siteHeader");
  var waFloat = document.getElementById("waFloat");

  function onScroll() {
    var y = window.pageYOffset || document.documentElement.scrollTop;
    if (header) header.classList.toggle("scrolled", y > 24);
    if (waFloat) waFloat.classList.toggle("show", y > 480);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Menu mobile (hambúrguer) ---------- */
  var hamburger = document.getElementById("hamburger");
  var mobileMenu = document.getElementById("mobileMenu");

  function closeMenu() {
    if (!hamburger || !mobileMenu) return;
    hamburger.classList.remove("open");
    mobileMenu.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.setAttribute("aria-label", "Abrir menu");
  }

  function toggleMenu() {
    if (!hamburger || !mobileMenu) return;
    var open = mobileMenu.classList.toggle("open");
    hamburger.classList.toggle("open", open);
    hamburger.setAttribute("aria-expanded", open ? "true" : "false");
    hamburger.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  }

  if (hamburger) hamburger.addEventListener("click", toggleMenu);

  /* Fecha ao clicar num link do menu */
  if (mobileMenu) {
    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
  }

  /* Fecha com ESC */
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });

  /* ---------- Scroll reveal com atraso escalonado ---------- */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll(".reveal"));

  /* Aplica o índice de atraso vindo do atributo data-delay */
  revealEls.forEach(function (el) {
    var d = el.getAttribute("data-delay");
    if (d) el.style.setProperty("--d", d);
  });

  if (prefersReduced || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });

    revealEls.forEach(function (el) { io.observe(el); });
  }
})();
