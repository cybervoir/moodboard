const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* 1. Images fade in once loaded */
document.querySelectorAll(".tile img").forEach((img) => {
  const show = () => img.classList.add("is-in");
  if (reduceMotion || img.complete) show();
  else { img.addEventListener("load", show, { once: true }); img.addEventListener("error", show, { once: true }); }
});

/* 2. Viewer: click a tile to see it large, arrows/keys to move through the whole board.
      Without JavaScript each tile still opens its full-size image. */
const viewer = document.getElementById("viewer");
const links = [...document.querySelectorAll(".tile__link")];
if (viewer && typeof viewer.showModal === "function") {
  const vImg = viewer.querySelector("img");
  const vTheme = viewer.querySelector(".viewer__theme");
  const vAlt = viewer.querySelector(".viewer__alt");
  let index = 0;

  const show = (i) => {
    index = (i + links.length) % links.length;
    const link = links[index];
    const thumb = link.querySelector("img");
    const theme = link.closest(".theme").querySelector("h2").textContent.replace(/^\d+/, "").trim();
    vImg.src = link.href;
    vImg.alt = thumb.alt;
    vTheme.textContent = theme + (link.dataset.new === "true" ? " · ✦ new find" : "");
    vAlt.textContent = thumb.alt;
  };

  links.forEach((link, i) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      show(i);
      viewer.showModal();
    });
  });

  viewer.addEventListener("click", (e) => {
    const step = e.target.closest("[data-step]");
    if (step) { show(index + Number(step.dataset.step)); return; }
    if (e.target.closest("[data-close]") || e.target === viewer) viewer.close();
  });
  viewer.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") show(index + 1);
    if (e.key === "ArrowLeft") show(index - 1);
  });
  viewer.addEventListener("close", () => links[index].focus({ preventScroll: true }));
}

/* 3. Palette: tap a swatch to copy its hex */
const toast = document.getElementById("toast");
let toastTimer;
document.querySelectorAll(".swatch").forEach((btn) => {
  btn.addEventListener("click", async () => {
    const hex = btn.dataset.hex;
    let msg = hex;
    try { await navigator.clipboard.writeText(hex); msg = `copied ${hex}`; } catch (_) {}
    toast.textContent = msg;
    toast.classList.add("is-on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("is-on"), 1400);
  });
});
