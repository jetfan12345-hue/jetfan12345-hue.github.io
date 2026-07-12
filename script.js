document.getElementById("year")?.textContent = new Date().getFullYear();

const heroImg = document.getElementById("product-img");
const imgCaption = document.getElementById("img-caption");
const realityToggle = document.getElementById("reality-toggle");

let showingKit = false;

if (realityToggle && heroImg) {
  realityToggle.addEventListener("click", () => {
    showingKit = !showingKit;
    heroImg.style.opacity = "0";
    setTimeout(() => {
      if (showingKit) {
        heroImg.src = "images/solar-dryer-kit.svg";
        heroImg.alt = "SunLine X1 complete kit contents";
        if (imgCaption) imgCaption.textContent = "Complete kit — everything included for setup";
        realityToggle.textContent = "View Product";
      } else {
        heroImg.src = "images/solar-dryer-hero.svg";
        heroImg.alt = "SunLine X1 solar dryer outdoors in sunlight";
        if (imgCaption) imgCaption.textContent = "SunLine X1™ — Designed for outdoor solar drying";
        realityToggle.textContent = "View Kit Contents";
      }
      heroImg.style.opacity = "1";
    }, 200);
  });
}

function handleOrder(event) {
  event.preventDefault();
  const msg = document.getElementById("order-msg");
  if (msg) msg.hidden = false;
  const btn = event.target.querySelector('button[type="submit"]');
  if (btn) {
    btn.disabled = true;
    btn.textContent = "Order Placed ✓";
  }
  return false;
}