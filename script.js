document.getElementById("year")?.textContent = new Date().getFullYear();

const heroImg = document.getElementById("product-img");
const imgCaption = document.getElementById("img-caption");
const realityToggle = document.getElementById("reality-toggle");

let showingReality = false;

if (realityToggle && heroImg) {
  realityToggle.addEventListener("click", () => {
    showingReality = !showingReality;
    heroImg.style.opacity = "0";
    setTimeout(() => {
      if (showingReality) {
        heroImg.src = "images/solar-dryer-reality.jpg";
        heroImg.alt = "What you actually get — cardboard and string";
        if (imgCaption) imgCaption.textContent = "What arrives in the box — cardboard, string, spool";
        realityToggle.textContent = "See Marketing Version";
      } else {
        heroImg.src = "images/solar-dryer-hero.jpg";
        heroImg.alt = "SunLine X1 solar dryer — premium product shot";
        if (imgCaption) imgCaption.textContent = "SunLine X1™ — As seen in our marketing department";
        realityToggle.textContent = "See What You Actually Get";
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

function handleFakeSubmit(event) {
  event.preventDefault();
  const msg = document.getElementById("form-msg");
  if (msg) msg.hidden = false;
  return false;
}