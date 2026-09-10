# Nu Essence Psychiatry — Website Starter

This starter uses the approved Nu Essence background artwork and adds a **subtle rotating light reflection around the existing gold circle every 7 seconds**.

## Key behavior

- The supplied background is completely static.
- The circular artwork does **not** rotate.
- Only a separate CSS highlight rotates over the outer gold ring.
- One complete light orbit takes **7 seconds**.
- Reduced-motion accessibility is included.

## Files

```text
nu-essence-site-starter/
├── index.html
├── styles.css
├── script.js
└── assets/
    └── nu-essence-hero-background.png
```

## Add to GitHub

Copy the entire folder into the repository, or copy the files into the matching locations in the existing project.

For a plain HTML/CSS site, open `index.html`.

If your project uses React/Next/Vite, the glow can be moved into a component later; the core CSS is framework-independent.

## Ring position

The glow is aligned to the existing ring with:

```css
--orbit-x: 56.9%;
--orbit-y: 37.4%;
--orbit-size: 21.7%;
```

These values are based on the supplied 1536 × 1024 hero artwork.

## Change animation speed

```css
animation: nu-orbit-light 7s linear infinite;
```

Examples:

- `5s` = faster
- `7s` = current
- `10s` = slower
- `15s` = much more relaxed

## Make the glow more subtle

Lower the alpha value of the brightest stops in the `conic-gradient`, or reduce the `drop-shadow` opacity.

## Important

The current desktop hero preserves the artwork at its original 3:2 aspect ratio so the CSS glow remains exactly aligned with the gold circle.

Once the final mobile design is approved, create a dedicated mobile crop/background rather than simply stretching the desktop composition.
