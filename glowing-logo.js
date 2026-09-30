/* NU ESSENCE — RANDOM GOLD RING CROSSFADE */

(function () {
  const container = document.querySelector(".ring-shine-cycle");
  if (!container) return;

  const layers = container.querySelectorAll(".ring-shine-layer");
  if (layers.length < 2) return;

  const FRAME_COUNT = 10;
  const FRAME_FOLDER = "assets/ring-frames/";
  const MIN_HOLD = 6000;
  const MAX_HOLD = 10000;
  const FADE_TIME = 4000;

  const frames = [];
  for (let i = 1; i <= FRAME_COUNT; i++) {
    const number = String(i).padStart(2, "0");
    frames.push(FRAME_FOLDER + "ring-" + number + ".png");
  }

  frames.forEach(function (src) {
    const image = new Image();
    image.src = src;
  });

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  let activeLayer = layers[0];
  let inactiveLayer = layers[1];
  let lastFrame = -1;

  function chooseFrame() {
    let index;
    do {
      index = Math.floor(Math.random() * FRAME_COUNT);
    } while (index === lastFrame);

    lastFrame = index;
    return index;
  }

  function randomHold() {
    return MIN_HOLD + Math.random() * (MAX_HOLD - MIN_HOLD);
  }

  const startingFrame = chooseFrame();
  activeLayer.style.backgroundImage =
    `url("${frames[startingFrame]}")`;
  activeLayer.classList.add("is-active");

  if (reducedMotion) return;

  function changeRing() {
    const nextFrame = chooseFrame();

    inactiveLayer.style.backgroundImage =
      `url("${frames[nextFrame]}")`;

    requestAnimationFrame(function () {
      inactiveLayer.classList.add("is-active");
      activeLayer.classList.remove("is-active");
    });

    setTimeout(function () {
      const oldLayer = activeLayer;
      activeLayer = inactiveLayer;
      inactiveLayer = oldLayer;

      inactiveLayer.classList.remove("is-active");
      setTimeout(changeRing, randomHold());
    }, FADE_TIME);
  }

  setTimeout(changeRing, randomHold());
})();
