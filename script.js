/* =========================================================
   NU ESSENCE — RANDOM GOLD RING TWINKLES

   The gold ring itself never moves.

   Eight fixed points sit directly on the ring.

   JavaScript randomly chooses which point catches the light,
   makes it shine briefly, then fades it back into the gold.

   There is NO clockwise sequence.
   There is NO rotation.
   ========================================================= */

(function () {

  const sparks = Array.from(
    document.querySelectorAll(".orbit-glow .spark")
  );


  if (!sparks.length) {
    return;
  }


  /* =======================================================
     ACCESSIBILITY
     ======================================================= */

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );


  if (reducedMotion.matches) {
    return;
  }


  /* =======================================================
     SETTINGS
     ======================================================= */

  /*
    Delay between twinkles.

    Example:
    one sparkle happens,
    then approximately 0.8–3 seconds before another.
  */

  const MIN_WAIT = 800;
  const MAX_WAIT = 3000;


  /*
    How long one reflection remains bright.
  */

  const MIN_SHINE = 280;
  const MAX_SHINE = 750;


  /*
    Occasionally allow a second location to catch
    the light shortly after the first.

    0.18 = 18% chance.
  */

  const DOUBLE_SPARK_CHANCE = 0.18;


  /*
    Very rarely create a stronger jewelry-like twinkle.
  */

  const STRONG_SPARK_CHANCE = 0.20;


  /* =======================================================
     UTILITIES
     ======================================================= */

  function randomBetween(min, max) {

    return (
      Math.random() *
      (max - min) +
      min
    );

  }


  function randomSpark(exclude) {

    const available = sparks.filter(
      function (spark) {
        return spark !== exclude;
      }
    );


    return available[
      Math.floor(
        Math.random() *
        available.length
      )
    ];

  }


  /* =======================================================
     SHINE ONE LOCATION
     ======================================================= */

  function shine(spark) {

    if (!spark) {
      return;
    }


    /*
      Restart cleanly if this sparkle happened recently.
    */

    spark.classList.remove(
      "is-shining",
      "is-strong"
    );


    void spark.offsetWidth;


    spark.classList.add(
      "is-shining"
    );


    /*
      Occasionally boost the intensity slightly.
    */

    if (
      Math.random() <
      STRONG_SPARK_CHANCE
    ) {

      spark.classList.add(
        "is-strong"
      );

    }


    const shineTime =
      randomBetween(
        MIN_SHINE,
        MAX_SHINE
      );


    window.setTimeout(
      function () {

        spark.classList.remove(
          "is-shining",
          "is-strong"
        );

      },

      shineTime
    );

  }


  /* =======================================================
     RANDOM TWINKLE LOOP
     ======================================================= */

  let previousSpark = null;


  function scheduleNextSpark() {

    const waitTime =
      randomBetween(
        MIN_WAIT,
        MAX_WAIT
      );


    window.setTimeout(
      function () {

        /*
          Pick a random sparkle.

          Avoid using the exact same location
          twice in a row.
        */

        const selectedSpark =
          randomSpark(
            previousSpark
          );


        shine(
          selectedSpark
        );


        previousSpark =
          selectedSpark;


        /*
          Occasionally another part of the ring
          catches the light shortly afterward.
        */

        if (
          Math.random() <
          DOUBLE_SPARK_CHANCE
        ) {

          const secondSpark =
            randomSpark(
              selectedSpark
            );


          const secondDelay =
            randomBetween(
              140,
              500
            );


          window.setTimeout(
            function () {

              shine(
                secondSpark
              );

            },

            secondDelay
          );

        }


        /*
          Schedule another completely random event.
        */

        scheduleNextSpark();

      },

      waitTime
    );

  }


  /* =======================================================
     START
     ======================================================= */

  scheduleNextSpark();

})();
