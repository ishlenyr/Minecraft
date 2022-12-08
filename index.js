const root = document.querySelector(":root");

let varX = 400;
let varY = 10;
let varZ = 800;
let rotateX = 0;

document.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === "ArrowLeft" && e.shiftKey) {
    varY -= 2;
    root.style.setProperty("--rotate-y", `${varY}deg`);
  } 
  else if (e.key === "ArrowRight" && e.shiftKey) {
    varY += 2;
    root.style.setProperty("--rotate-y", `${varY}deg`);
  } 
  else if (e.key === "ArrowRight") {
    varZ -= 20;
    root.style.setProperty("--translate-z", `${varZ}px`);
  } 
  else if (e.key === "ArrowLeft") {
    varZ += 20;
    root.style.setProperty("--translate-z", `${varZ}px`);
  } 
  else if (e.key === "ArrowDown" && e.shiftKey) {
    rotateX -= 2;
    root.style.setProperty("--rotate-x", `${rotateX}deg`);
  } 
  else if (e.key === "ArrowUp" && e.shiftKey) {
    rotateX += 2;
    root.style.setProperty("--rotate-x", `${rotateX}deg`);
  } 
  else if (e.key === "ArrowDown") {
    varX -= 20;
    root.style.setProperty("--translate-x", `${varX}px`);
  } 
  else if (e.key === "ArrowUp") {
    varX += 20;
    root.style.setProperty("--translate-x", `${varX}px`);
  }
});
