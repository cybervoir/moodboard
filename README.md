# moodboard — cybervoir

Live at **https://cybervoir.github.io/moodboard/** (repository: https://github.com/cybervoir/moodboard).

A one-page static site built from the Figma frame **"moodboard — cybervoir"**
(https://www.figma.com/design/EmbQlTi5s0ypUnuJXEQUP7). Plain HTML + CSS + a little JavaScript, no build step.

```
index.html   all text, the six themes and every image (edit text here)
style.css    layout, colours, masonry columns, viewer
main.js      image viewer (click, ← →, Esc), tap-to-copy palette, fade-in
assets/img/  80 images as WebP: name.webp (full) + name-480.webp (grid)
assets/og.jpg  preview picture shown when the link is shared
```

Image names follow the board: `t1_…` cute with teeth, `t2_…` lotus os, `t3_…` corp nature,
`t4_…` divine machinery, `t5_…` found words, `t6_…` sakha // turkic code.

## Preview on your Mac

```bash
python3 -m http.server 8770 --directory ~/stable-moon-site
```

Then open http://localhost:8770

## Add or swap an image

1. Save two WebP files in `assets/img/`: the full one (about 900 px on the long side) and a
   480 px wide copy named `…-480.webp`.
2. In `index.html`, copy one `<figure class="tile">` block inside the theme you want, change the
   two file names, the `width`/`height` of the small copy, and the `alt` text (a short description).

## Update the live site

1. Open https://github.com/cybervoir/moodboard and choose **Add file → Upload files**.
2. Drag in the changed files. Files inside `assets/img` go in by dragging an `assets` folder that
   contains an `img` folder with them, so they land in the right place.
3. Click **Commit changes**. The site updates in a minute or two.

GitHub's website takes at most 100 files per upload and 25 MB per file, so upload big batches
in parts. A file with the same name replaces the old one.
