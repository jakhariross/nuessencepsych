# Nu Essence Random Gold Ring Package

This package uses the 10 supplied transparent gold ring variants and randomly crossfades between them.

## Included

- `index.html`
- `styles.css`
- `script.js`
- `assets/ring-frames/ring-01.png` through `ring-10.png`

## Hero background

The CSS expects your existing ring-free hero background at:

`assets/hero-base-no-ring.jpg`

If your current hero background has a different filename, either:

1. rename it to `hero-base-no-ring.jpg`, or
2. change this line in `styles.css`:

```css
background-image: url("assets/hero-base-no-ring.jpg");
```

## Animation behavior

- Hero background stays completely still.
- One transparent ring variant is visible at a time.
- The current ring fades out over 1.6 seconds.
- A different random ring fades in.
- It remains visible for a random 3–6.5 seconds.
- The same ring is never selected twice in a row.

## Fine-tuning ring position

In `styles.css`, adjust only these variables if the ring needs to move or resize:

```css
--orbit-x: 54.8%;
--orbit-y: 36.5%;
--orbit-size: 29.3%;
```

Do not add the old `.orbit-glow`, `.spark`, or `.ring-glints` systems back in. This package replaces them.
