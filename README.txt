HOW TO ADD THIS TO YOUR GITHUB REPO
====================================

FILES IN THIS FOLDER:

  hero-ring-cycle.css          -> the CSS for the ring effect
  hero-ring-cycle.js           -> the JS that drives the shine cycling
  assets/hero-base-no-ring.jpg -> the backdrop with a dim, permanent
                                   static ring baked in
  assets/ring-frames/ring-01.png ... ring-10.png
                                -> the 10 bright shine frames that
                                   fade in/out on top of the static ring


UPLOAD STEPS (GitHub web UI):

1. Go to your repo: github.com/jakhariross/nuessencepsych

2. Upload assets/hero-base-no-ring.jpg and the whole assets/ring-frames/
   folder (all 10 PNGs) using "Add file -> Upload files".
   Keep the same folder structure: assets/ring-frames/ring-01.png etc.

3. Open styles.css in the repo, click the pencil (edit) icon, and
   replace its entire contents with hero-ring-cycle.css from this
   folder.

4. Add hero-ring-cycle.js to your repo as a new file (or merge its
   contents into your existing script.js).

5. In index.html, make sure these are present:

     In <head>:
       <link rel="stylesheet" href="styles.css" />

     Before </body>:
       <script src="hero-ring-cycle.js"></script>

   Also make sure .hero-art-overlay exists as an empty <div> inside
   .hero -- the ring positions itself relative to that element:

     <div class="hero">
       <div class="hero-art-overlay"></div>
       ... rest of your hero content ...
     </div>

6. Commit changes. GitHub Pages will redeploy automatically --
   check the Actions tab or wait ~1-2 minutes, then refresh your site.


NOTES:

- If your CSS file's url("assets/hero-base-no-ring.jpg") path doesn't
  match where you actually upload the file, update that one line in
  hero-ring-cycle.css to match your repo's folder structure.

- The :root variables --orbit-x, --orbit-y, --orbit-size must already
  be defined elsewhere in your stylesheet (they control ring position)
  -- these should already be present from your existing setup:

    --orbit-x: 53.1%;
    --orbit-y: 41.2%;
    --orbit-size: 19.3%;
