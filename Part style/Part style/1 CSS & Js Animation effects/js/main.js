document.addEventListener("mousemove", (e) => {
  let body = document.querySelector("body");
  let hearts = document.createElement("span");
  let x = e.offsetX;
  let y = e.offsetY;
  hearts.style.left = x + "px";
  hearts.style.top = y + "px";
  let size = Math.random() * 80;
  hearts.style.width = 20 + size + "px";
  hearts.style.height = 20 + size + "px";
  let transformValue = Math.random() * 360;
  hearts.style.transform = "rotate(" + transformValue + "deg)";
  body.appendChild(hearts);
  setTimeout(() => {
    hearts.remove();
  }, 1000);
});
