/* =========================================================
   NU ESSENCE — AMBIENT RANDOM GOLD GLINTS

   Secondary effect only.

   Creates subtle reflections at random locations on the
   main gold ring.

   These are intentionally softer and less frequent than
   the main sparkle effect controlled by script.js.
   ========================================================= */

(function () {

  const container =
    document.querySelector(
      ".ring-glints"
    );


  /*
    If the optional container is not present,
    simply do nothing.
  */

  if (!container) {
    return;
  }


  /* =======================================================
     ACCESSIBILITY
     ======================================================= */

  if (
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
  ) {

    return;

  }


  /* =======================================================
     SETTINGS
     ======================================================= */

  const GLINT_COUNT = 2;

  const glints = [];


  /* =======================================================
     CREATE THE GLINT ELEMENTS
     ======================================================= */

  for (
    let i = 0;
    i < GLINT_COUNT;
    i++
  ) {

    const glint =
      document.createElement(
        "div"
      );


    glint.className =
      "ring-glint";


    container.appendChild(
      glint
    );


    glints.push(
      glint
    );

  }


  /* =======================================================
     PLACE GLINT DIRECTLY ON CIRCLE
     ======================================================= */

  function placeAtRandomAngle(
    glint
  ) {

    const angle =
      Math.random() *
      Math.PI *
      2;


    const radius = 50;


    const left =
      50 +
      radius *
      Math.sin(angle);


    const top =
      50 -
      radius *
      Math.cos(angle);


    glint.style.left =
      left + "%";


    glint.style.top =
      top + "%";

  }


  /* =======================================================
     RANDOM GLINT CYCLE
     ======================================================= */

  function runGlint(
    glint
  ) {

    /*
      Make sure the old light is gone.
    */

    glint.style.opacity =
      "0";


    /*
      Give it time to fade before moving.
    */

    window.setTimeout(
      function () {

        placeAtRandomAngle(
          glint
        );


        /*
          Random soft intensity.
        */

        const brightness =
          (
            0.30 +
            Math.random() *
            0.30
          ).toFixed(2);


        glint.style.opacity =
          brightness;


        /*
          Keep the ambient glint visible briefly.
        */

        const visibleTime =
          400 +
          Math.random() *
          700;


        window.setTimeout(
          function () {

            glint.style.opacity =
              "0";


            /*
              Long random pause before this
              particular glint appears again.
            */

            const nextDelay =
              2500 +
              Math.random() *
              5500;


            window.setTimeout(
              function () {

                runGlint(
                  glint
                );

              },

              nextDelay
            );

          },

          visibleTime
        );

      },

      650
    );

  }


  /* =======================================================
     START GLINTS AT DIFFERENT TIMES
     ======================================================= */

  glints.forEach(
    function (
      glint,
      index
    ) {

      placeAtRandomAngle(
        glint
      );


      const startDelay =
        1800 +
        index *
        1400 +
        Math.random() *
        2000;


      window.setTimeout(
        function () {

          runGlint(
            glint
          );

        },

        startDelay
      );

    }
  );

})();
