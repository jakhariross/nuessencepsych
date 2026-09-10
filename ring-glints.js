// Drives 1-2 independent "glints" that appear at a random angle on
// the ring, hold briefly, fade out, then silently jump to a new
// random angle -- reads as unpredictable light catching metal
// rather than one highlight sweeping at a constant speed.
(function () {
  var container = document.querySelector(".ring-glints");
  if (!container) return;

  // respect reduced-motion: leave glints invisible, do nothing
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var GLINT_COUNT = 2;
  var glints = [];

  for (var i = 0; i < GLINT_COUNT; i++) {
    var el = document.createElement("div");
    el.className = "ring-glint";
    container.appendChild(el);
    glints.push(el);
  }

  function placeAtRandomAngle(el) {
    var angleDeg = Math.random() * 360;
    var rad = (angleDeg * Math.PI) / 180;
    var leftPct = 50 + 50 * Math.sin(rad);
    var topPct = 50 - 50 * Math.cos(rad);
    el.style.left = leftPct + "%";
    el.style.top = topPct + "%";
  }

  function cycle(el, delay) {
    setTimeout(function loopStart() {
      // fade out from wherever it currently is (first run: already invisible)
      el.style.opacity = "0";

      setTimeout(function () {
        // reposition while fully invisible, then fade in
        placeAtRandomAngle(el);
        var peakOpacity = (0.75 + Math.random() * 0.25).toFixed(2);

        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            el.style.opacity = peakOpacity;
          });
        });

        var holdTime = 1200 + Math.random() * 2600; // visible for 1.2-3.8s
        setTimeout(function () {
          cycle(el, 0);
        }, holdTime);
      }, 450); // matches roughly half the CSS fade transition

    }, delay);
  }

  glints.forEach(function (el, i) {
    placeAtRandomAngle(el); // silent initial position, still opacity 0
    cycle(el, i * 900 + Math.random() * 800); // stagger their starts
  });
})();
