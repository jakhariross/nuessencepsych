/* Nu Essence Psychiatry interactions */

console.log("Nu Essence Psychiatry homepage loaded.");


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

(function () {

  const toggle = document.querySelector(".nav-toggle");
  const mobileNav = document.querySelector(".mobile-nav");

  if (!toggle || !mobileNav) return;


  function closeMenu() {
    mobileNav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
  }


  toggle.addEventListener("click", function (event) {

    event.stopPropagation();

    const isOpen = mobileNav.classList.toggle("is-open");

    toggle.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );

    toggle.setAttribute(
      "aria-label",
      isOpen ? "Close menu" : "Open menu"
    );

  });


  mobileNav.addEventListener("click", function (event) {
    event.stopPropagation();
  });


  mobileNav
    .querySelectorAll("a")
    .forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });


  document.addEventListener("click", function () {
    closeMenu();
  });


  window.addEventListener("resize", function () {
    if (window.innerWidth > 1024) {
      closeMenu();
    }
  });

})();
