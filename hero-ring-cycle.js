// Crossfades ONLY a small ring-sized overlay between 10 transparent
// ring-only frames, appended inside .hero-art-overlay so positioning
// stays correct at any window size (that element mirrors the
// background image's exact displayed box). The hero's main backdrop
// image never changes or fades.
(function () {
  var artOverlay = document.querySelector(".hero-art-overlay");
  var hero = document.querySelector(".hero");
  var mountPoint = artOverlay || hero; // fall back to .hero if needed
  if (!mountPoint) return;

  var FRAME_COUNT = 10;
  var FRAME_PATH = "/ring-frames/ring-";
  var MIN_HOLD = 3000;
  var MAX_HOLD = 6500;
  var FADE_MS = 1600; // must match .ring-shine-layer's CSS transition duration

  var frames = [];
  for (var i = 1; i <= FRAME_COUNT; i++) {
    frames.push(FRAME_PATH + String(i).padStart(2, "0") + ".png");
  }
  frames.forEach(function (src) {
    var img = new Image();
    img.src = src;
  });

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

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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

  active.style.backgroundImage = "url('" + frames[pickNextIndex()] + "')";
  active.classList.add("is-active");

  if (reduceMotion) return;

  function swap() {
    active.classList.remove("is-active");

    setTimeout(function () {
      var nextSrc = frames[pickNextIndex()];
      inactive.style.backgroundImage = "url('" + nextSrc + "')";

      void inactive.offsetWidth;

      inactive.classList.add("is-active");

      var tmp = active;
      active = inactive;
      inactive = tmp;

      var hold = MIN_HOLD + Math.random() * (MAX_HOLD - MIN_HOLD);
      setTimeout(swap, hold);
    }, FADE_MS);
  }

  var firstHold = MIN_HOLD + Math.random() * (MAX_HOLD - MIN_HOLD);
  setTimeout(swap, firstHold);
})();
