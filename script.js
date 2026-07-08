document.getElementById("year")?.textContent = new Date().getFullYear();

function handleFakeSubmit(event) {
  event.preventDefault();
  const msg = document.getElementById("form-msg");
  if (msg) {
    msg.hidden = false;
  }
  return false;
}