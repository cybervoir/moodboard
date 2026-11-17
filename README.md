# moodboard — cybervoir

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
`t4_…` divine machinery, `t5_…` found words, `t6_…` sakha code.

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
3. For a new find, keep `<span class="new">✦ new</span>` in the block; otherwise delete it.

## Publish free on GitHub Pages

1. On github.com create a **public** repository, for example `stable-moon`.
   The address will be `https://<your-username>.github.io/stable-moon/`.
2. Choose **Add file → Upload files** and drag in `index.html`, `style.css`, `main.js`,
   `README.md` and the whole `assets` folder. Click **Commit changes**.
3. Open **Settings → Pages**. Under "Build and deployment" pick **Deploy from a branch**,
   branch **main**, folder **/ (root)**, then **Save**.
4. Wait a minute or two and open the address shown on that page.

To update later, upload the changed file again. The whole site is about 7 MB.

Note: most images were collected from Pinterest and belong to their creators. The page
says so in its footer; keep that line if you publish it.
