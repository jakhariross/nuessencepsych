// =========================================================
// NU ESSENCE — RANDOM RING FRAME CROSSFADE
//
// Uses 10 transparent ring-only PNGs.
// The hero background never changes.
// A random ring frame fades in, holds, fades out,
// then another random frame appears.
// =========================================================

(function () {
  var artOverlay = document.querySelector(".hero-art-overlay");
  var hero = document.querySelector(".hero");
  var mountPoint = artOverlay || hero;

  if (!mountPoint) return;

  var FRAME_COUNT = 10;
  var FRAME_PATH = "assets/ring-frames/ring-";

  // Hold each reflection for a random 3–6.5 seconds
  var MIN_HOLD = 3000;
  var MAX_HOLD = 6500;

  // Must match the CSS transition duration
  var FADE_MS = 1600;

  var frames = [];

  for (var i = 1; i <= FRAME_COUNT; i++) {
    frames.push(
      FRAME_PATH +
      String(i).padStart(2, "0") +
      ".png"
    );
  }

  // Preload all images to avoid flashing/loading gaps.
  frames.forEach(function (src) {
    var img = new Image();
    img.src = src;
  });

  // Build the two-layer crossfade container.
  var container = document.createElement("div");
  container.className = "ring-shine-cycle";
  container.setAttribute("aria-hidden", "true");

  var layerA = document.createElement("div");
  var layerB = document.createElement("div");

  layerA.className = "ring-shine-layer";
  layerB.className = "ring-shine-layer";

  container.appendChild(layerA);
  container.appendChild(layerB);
  mountPoint.appendChild(container);

  var reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  var lastIndex = -1;

  function pickNextIndex() {
    var next;

    do {
      next = Math.floor(Math.random() * FRAME_COUNT);
    } while (next === lastIndex);

    lastIndex = next;
    return next;
  }

  var active = layerA;
  var inactive = layerB;

  // Show the first random frame.
  active.style.backgroundImage =
    "url('" + frames[pickNextIndex()] + "')";

  active.classList.add("is-active");

  if (reduceMotion) return;

  function swap() {
    // Fade current ring down.
    active.classList.remove("is-active");

    setTimeout(function () {
      // Change the hidden layer to a different random reflection.
      var nextSrc = frames[pickNextIndex()];

      inactive.style.backgroundImage =
        "url('" + nextSrc + "')";

      // Force the browser to register the hidden state.
      void inactive.offsetWidth;

      // Fade the new reflection in.
      inactive.classList.add("is-active");

      var temp = active;
      active = inactive;
      inactive = temp;

      var hold =
        MIN_HOLD +
        Math.random() * (MAX_HOLD - MIN_HOLD);

      setTimeout(swap, hold);
    }, FADE_MS);
  }

  var firstHold =
    MIN_HOLD +
    Math.random() * (MAX_HOLD - MIN_HOLD);

  setTimeout(swap, firstHold);
})();
