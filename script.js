/* =========================================================
   NU ESSENCE — RANDOM GOLD RING TWINKLES

   The gold ring itself is part of the background image
   and never moves.

   These sparks sit at fixed positions on the gold ring.
   JavaScript randomly selects individual points to brighten,
   sparkle, then fade back down.

   The result should feel like polished gold catching light,
   NOT like lights rotating in sequence.
   ========================================================= */

(function () {

  const sparks = Array.from(
    document.querySelectorAll(".orbit-glow .spark")
  );

  if (!sparks.length) return;


  /* =======================================================
     ACCESSIBILITY
     ======================================================= */

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  if (reduceMotion.matches) {
    return;
  }


  /* =======================================================
     SETTINGS
     ======================================================= */

  const MIN_WAIT = 700;
  const MAX_WAIT = 2600;

  const MIN_SHINE = 300;
  const MAX_SHINE = 850;

  /*
    Chance that a second sparkle appears shortly after
    the first one.

    0.20 = approximately 20% of the time.
  */
  const DOUBLE_SPARK_CHANCE = 0.20;


  /* =======================================================
     HELPERS
     ======================================================= */

  function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
  }


  function randomSpark(exclude = null) {

    let choices = sparks.filter(function (spark) {
      return spark !== exclude;
    });

    return choices[
      Math.floor(Math.random() * choices.length)
    ];
  }


  /* =======================================================
     MAKE ONE POINT SHINE
     ======================================================= */

  function shine(spark) {

    if (!spark) return;

    /*
      Remove first in case that point was recently active.
      This lets the animation restart cleanly.
    */
    spark.classList.remove("is-shining");

    void spark.offsetWidth;

    spark.classList.add("is-shining");


    const shineTime = randomBetween(
      MIN_SHINE,
      MAX_SHINE
    );


    window.setTimeout(function () {

      spark.classList.remove("is-shining");

    }, shineTime);

  }


  /* =======================================================
     RANDOM TWINKLE LOOP
     ======================================================= */

  let previousSpark = null;


  function scheduleNextSpark() {

    const waitTime = randomBetween(
      MIN_WAIT,
      MAX_WAIT
    );


    window.setTimeout(function () {

      /*
        Usually don't select the exact same sparkle
        two times in a row.
      */
      const selectedSpark = randomSpark(previousSpark);

      shine(selectedSpark);

      previousSpark = selectedSpark;


      /*
        Occasionally let another point catch the light
        shortly after the first.

        This keeps the effect from feeling mechanically
        one-at-a-time.
      */
      if (Math.random() < DOUBLE_SPARK_CHANCE) {

        const secondSpark = randomSpark(selectedSpark);

        const secondDelay = randomBetween(
          120,
          500
        );

        window.setTimeout(function () {
          shine(secondSpark);
        }, secondDelay);

      }


      scheduleNextSpark();

    }, waitTime);

  }


  /* =======================================================
     START
     ======================================================= */

  scheduleNextSpark();

})();
