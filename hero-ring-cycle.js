// Crossfades the two .ring-shine-layer divs already sitting inside
// .ring-shine-cycle (inside .ring-wrapper) between 10 transparent,
// self-contained ring-only frames. Nothing about the backdrop or the
// static NE monogram is touched — only the ring glow layers.
(function () {
  var container = document.querySelector(".ring-shine-cycle");
  if (!container) return;

  var layers = container.querySelectorAll(".ring-shine-layer");
  var layerA = layers[0];
  var layerB = layers[1];
  if (!layerA || !layerB) return;

  var FRAME_COUNT = 10;
  var FRAME_PATH = "ring-";
  var CACHE_BUST = "?v=1";
  var MIN_HOLD = 3000;
  var MAX_HOLD = 6500;
  var FADE_MS = 3200; // must match .ring-shine-layer's CSS transition duration

  var frames = [];
  for (var i = 1; i <= FRAME_COUNT; i++) {
    frames.push(FRAME_PATH + String(i).padStart(2, "0") + ".png" + CACHE_BUST);
  }
  frames.forEach(function (src) {
    var img = new Image();
    img.src = src;
  });

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
