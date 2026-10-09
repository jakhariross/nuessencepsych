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


/* =========================================================
   BOUTIQUE SERVICE MODAL
   ========================================================= */

(function () {

  const modal =
    document.querySelector("#serviceModal");

  if (!modal) return;

  const cards =
    document.querySelectorAll(".service-reveal");

  const closeButton =
    modal.querySelector(".service-modal-close");

  const backdrop =
    modal.querySelector(".service-modal-backdrop");

  const image =
    modal.querySelector(".service-modal-image");

  const number =
    modal.querySelector("#serviceModalNumber");

  const kicker =
    modal.querySelector("#serviceModalKicker");

  const title =
    modal.querySelector("#serviceModalTitle");

  const intro =
    modal.querySelector("#serviceModalIntro");

  const list =
    modal.querySelector("#serviceModalList");


  const services = {

     medication: {
    number: "01",
    kicker: "Psychiatric Care",
    title: "Medication Management",
    intro:
      "Medication should support your life, not define it. Nu Essence provides thoughtful, individualized psychiatric medication management built around your symptoms, goals, response, and overall well-being.",
    items: [
      "Comprehensive medication review",
      "Individualized treatment planning",
      "Ongoing effectiveness monitoring",
      "Side-effect and medication concerns",
      "Thoughtful follow-up and adjustment"
    ],
    image: "url('medication_management.png')"
  },

  adhd: {
    number: "02",
    kicker: "Assessment",
    title: "ADHD Evaluations",
    intro:
      "Understanding attention, focus, and executive function starts with a careful evaluation. Our approach looks beyond a checklist to understand how symptoms affect your daily life.",
    items: [
      "Detailed clinical assessment",
      "Attention and executive-function concerns",
      "Personal and symptom history",
      "Diagnostic clarification",
      "Individualized treatment recommendations"
    ],
    image: "url('Flowing_thoughts.png')"
  },

  telehealth: {
    number: "03",
    kicker: "Florida Care",
    title: "Telehealth Care",
    intro:
      "Receive thoughtful psychiatric care from a private, comfortable space. Nu Essence brings clinical support to you through secure telehealth throughout Florida.",
    items: [
      "Secure virtual appointments",
      "Convenient follow-up care",
      "Florida-wide availability",
      "Private and confidential sessions",
      "Designed around modern schedules"
    ],
    image: "url('telehealth_care.png')"
  },

  anxiety: {
    number: "04",
    kicker: "Whole-Person Care",
    title: "Anxiety & Depression Care",
    intro:
      "Anxiety and depression can influence nearly every part of life. Treatment begins with understanding the whole picture and creating a plan designed around you.",
    items: [
      "Comprehensive psychiatric evaluation",
      "Anxiety and mood assessment",
      "Evidence-based treatment planning",
      "Medication management when appropriate",
      "Ongoing monitoring and support"
    ],
    image: "url('Depression.png')",
imageSize: "cover",
imagePosition: "center center"
  }
  };


  function openService(serviceKey) {

    const service =
      services[serviceKey];

    if (!service) return;


    number.textContent =
      service.number;

    kicker.textContent =
      service.kicker;

    title.textContent =
      service.title;

    intro.textContent =
      service.intro;


    list.innerHTML = "";

    service.items.forEach(function (item) {

      const li =
        document.createElement("li");

      li.textContent =
        item;

      list.appendChild(li);

    });


    image.style.backgroundImage =
  service.image;

image.style.backgroundSize =
  service.imageSize || "cover";

image.style.backgroundPosition =
  service.imagePosition || "center";


    modal.classList.add("is-open");

    modal.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.style.overflow =
      "hidden";

  }


  function closeService() {

    modal.classList.remove("is-open");

    modal.setAttribute(
      "aria-hidden",
      "true"
    );

    document.body.style.overflow =
      "";

  }


  cards.forEach(function (card) {

    card.addEventListener(
      "click",
      function () {

        openService(
          card.dataset.service
        );

      }
    );

  });


 if (closeButton) {
  closeButton.addEventListener(
    "click",
    closeService
  );
}

if (backdrop) {
  backdrop.addEventListener(
    "click",
    closeService
  );
}


  document.addEventListener(
    "keydown",
    function (event) {

      if (event.key === "Escape") {
        closeService();
      }

    }
  );

})();
