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

/* =========================================================
   RESOURCE MODAL
   ========================================================= */

(function () {

  const modal =
    document.querySelector("#resourceModal");

  if (!modal) return;


  const cards =
    document.querySelectorAll(".resource-reveal");

  const closeButton =
    modal.querySelector(".resource-modal-close");

  const backdrop =
    modal.querySelector(".resource-modal-backdrop");

  const kicker =
    modal.querySelector("#resourceModalKicker");

  const title =
    modal.querySelector("#resourceModalTitle");

  const intro =
    modal.querySelector("#resourceModalIntro");

  const list =
    modal.querySelector("#resourceModalList");


  const resources = {

    "first-appointment": {

      kicker:
        "Patient Preparation",

      title:
        "Preparing for Your First Appointment",

      intro:
        "A little preparation can make your first visit more productive and help your provider better understand what you have been experiencing.",

      items: [
        "Bring a current list of medications and supplements",
        "Write down your main symptoms and when they began",
        "Think about what you would most like help with",
        "Have relevant medical and psychiatric history available",
        "Prepare questions you want to discuss",
        "Have insurance, identification, and pharmacy information ready"
      ]

    },


    "medication-followup": {

      kicker:
        "Medication Care",

      title:
        "Understanding Medication Follow-Ups",

      intro:
        "Medication follow-up visits help your provider understand how treatment is working and whether changes may be helpful.",

      items: [
        "Discuss changes in symptoms since your last visit",
        "Review how consistently medication has been taken",
        "Talk about possible side effects or concerns",
        "Review sleep, appetite, mood, focus, and energy",
        "Discuss any new medications or supplements",
        "Ask questions before making medication changes"
      ]

    },


    "telehealth-checklist": {

      kicker:
        "Virtual Care",

      title:
        "Telehealth Visit Checklist",

      intro:
        "Preparing your space and technology ahead of time can help your telehealth appointment feel private, comfortable, and uninterrupted.",

      items: [
        "Choose a quiet and private location",
        "Check your internet connection before the visit",
        "Test your camera, microphone, and speakers",
        "Keep your device charged or plugged in",
        "Have your medication list and questions nearby",
        "Avoid driving or multitasking during your appointment"
      ]

    }

  };


  function openResource(resourceKey) {

    const resource =
      resources[resourceKey];

    if (!resource) return;


    kicker.textContent =
      resource.kicker;

    title.textContent =
      resource.title;

    intro.textContent =
      resource.intro;


    list.innerHTML = "";

    resource.items.forEach(function (item) {

      const li =
        document.createElement("li");

      li.textContent =
        item;

      list.appendChild(li);

    });


    modal.classList.add("is-open");

    modal.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.style.overflow =
      "hidden";

  }


  function closeResource() {

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

        openResource(
          card.dataset.resource
        );

      }
    );

  });


  if (closeButton) {

    closeButton.addEventListener(
      "click",
      closeResource
    );

  }


  if (backdrop) {

    backdrop.addEventListener(
      "click",
      closeResource
    );

  }


  document.addEventListener(
    "keydown",
    function (event) {

      if (
        event.key === "Escape" &&
        modal.classList.contains("is-open")
      ) {
        closeResource();
      }

    }
  );

})();


/* =========================================================
   BLOG ARTICLE MODAL
   ========================================================= */

(function () {

  const modal =
    document.querySelector("#blogModal");

  if (!modal) return;


  const cards =
    document.querySelectorAll(".blog-reveal");

  const closeButton =
    modal.querySelector(".blog-modal-close");

  const backdrop =
    modal.querySelector(".blog-modal-backdrop");

  const category =
    modal.querySelector("#blogModalCategory");

  const title =
    modal.querySelector("#blogModalTitle");

  const lead =
    modal.querySelector("#blogModalLead");

  const body =
    modal.querySelector("#blogModalBody");


  const articles = {

    "adhd-evaluation": {

      category:
        "ADHD",

      title:
        "What an ADHD evaluation actually looks at",

      lead:
        "An ADHD evaluation looks at more than whether someone feels distracted or has trouble focusing.",

      sections: [

        {
          heading:
            "The bigger picture matters",

          text:
            "A thoughtful evaluation considers when symptoms began, how consistently they appear, and how they affect daily life. Attention difficulties can look different from person to person, so context matters."
        },

        {
          heading:
            "Function is an important part of the story",

          text:
            "Your provider may ask about work, school, relationships, organization, time management, forgetfulness, impulsivity, emotional regulation, and completing everyday responsibilities."
        },

        {
          heading:
            "Other contributors should be considered",

          text:
            "Sleep problems, anxiety, depression, stress, medical conditions, substance use, and certain medications can sometimes create symptoms that overlap with ADHD."
        },

        {
          heading:
            "History helps clarify patterns",

          text:
            "Childhood experiences, previous school or work difficulties, family history, and past treatment can all help your provider understand whether symptoms reflect a long-standing pattern."
        },

        {
          heading:
            "The goal is clarity",

          text:
            "The purpose of an evaluation is not simply to apply a label. It is to better understand what may be contributing to your symptoms and identify appropriate next steps."
        }

      ]

    },


    "medication-tracking": {

      category:
        "MEDICATION",

      title:
        "What to track between medication visits",

      lead:
        "The time between appointments can provide valuable information about how a medication is affecting your symptoms and daily life.",

      sections: [

        {
          heading:
            "Notice what is improving",

          text:
            "Pay attention to changes in mood, anxiety, focus, sleep, motivation, energy, irritability, or other symptoms connected to your treatment goals."
        },

        {
          heading:
            "Track side effects",

          text:
            "Write down new or uncomfortable changes such as nausea, headaches, appetite changes, sleep difficulty, restlessness, fatigue, or other concerns."
        },

        {
          heading:
            "Look for patterns",

          text:
            "It can be helpful to notice when medication is taken, when benefits seem strongest, when they seem to fade, and whether symptoms change at certain times of day."
        },

        {
          heading:
            "Consistency matters",

          text:
            "Let your provider know if doses were missed, skipped, taken at different times, or stopped. This information can help make follow-up decisions more accurate."
        },

        {
          heading:
            "Bring questions with you",

          text:
            "If something feels unclear, write it down before your appointment. A follow-up visit is a good time to discuss benefits, concerns, expectations, and possible treatment adjustments."
        }

      ]

    },


    "daily-function": {

      category:
        "MENTAL HEALTH",

      title:
        "When symptoms begin affecting daily function",

      lead:
        "Mental health symptoms often become more meaningful clinically when they begin interfering with the way you live, work, connect, or care for yourself.",

      sections: [

        {
          heading:
            "Work and school",

          text:
            "Difficulty concentrating, completing tasks, arriving on time, staying organized, or keeping up with responsibilities can provide important information about symptom severity."
        },

        {
          heading:
            "Sleep and routine",

          text:
            "Changes in sleep, energy, motivation, appetite, hygiene, exercise, or daily structure can sometimes signal that symptoms are having a broader impact."
        },

        {
          heading:
            "Relationships",

          text:
            "Withdrawal, irritability, conflict, feeling overwhelmed, or difficulty staying connected with others can be important parts of the clinical picture."
        },

        {
          heading:
            "Enjoyment and motivation",

          text:
            "Losing interest in activities, avoiding responsibilities, or struggling to start tasks that once felt manageable may be worth discussing with a mental health provider."
        },

        {
          heading:
            "You do not have to wait for a crisis",

          text:
            "Seeking support does not require symptoms to become unbearable. Changes in daily functioning can be a useful signal that it may be time to talk with a qualified professional."
        }

      ]

    }

  };


  function openArticle(articleKey) {

    const article =
      articles[articleKey];

    if (!article) return;


    category.textContent =
      article.category;

    title.textContent =
      article.title;

    lead.textContent =
      article.lead;


    body.innerHTML = "";


    article.sections.forEach(function (section) {

      const sectionBlock =
        document.createElement("section");

      sectionBlock.classList.add(
        "blog-article-section"
      );


      const heading =
        document.createElement("h3");

      heading.textContent =
        section.heading;


      const paragraph =
        document.createElement("p");

      paragraph.textContent =
        section.text;


      sectionBlock.appendChild(
        heading
      );

      sectionBlock.appendChild(
        paragraph
      );

      body.appendChild(
        sectionBlock
      );

    });


    modal.classList.add("is-open");

    modal.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.style.overflow =
      "hidden";

  }


  function closeArticle() {

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

        openArticle(
          card.dataset.article
        );

      }
    );

  });


  if (closeButton) {

    closeButton.addEventListener(
      "click",
      closeArticle
    );

  }


  if (backdrop) {

    backdrop.addEventListener(
      "click",
      closeArticle
    );

  }


  document.addEventListener(
    "keydown",
    function (event) {

      if (
        event.key === "Escape" &&
        modal.classList.contains("is-open")
      ) {
        closeArticle();
      }

    }
  );

})();




