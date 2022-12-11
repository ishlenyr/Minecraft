const root = document.querySelector(":root");
const style = getComputedStyle(document.body)

function changeProperty(name, value, suffix) {
  propertyValue = parseFloat(style.getPropertyValue(name).toString().replace(suffix,''));
  root.style.setProperty(name, `${propertyValue + value}${suffix}`);
}

document.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === "ArrowLeft" && e.shiftKey) {
    changeProperty('--rotate-y', 2, 'deg');
  } 
  else if (e.key === "ArrowRight" && e.shiftKey) {
    changeProperty('--rotate-y', -2, 'deg');
  } 
  else if (e.key === "ArrowRight") {
    changeProperty('--translate-x', 20, 'px');
  } 
  else if (e.key === "ArrowLeft") {
    changeProperty('--translate-x', -20, 'px');
  } 
  else if (e.key === "ArrowDown" && e.shiftKey) {
    changeProperty('--rotate-x', -2, 'deg');
  } 
  else if (e.key === "ArrowUp" && e.shiftKey) {
    changeProperty('--rotate-x', 2, 'deg');
  } 
  else if (e.key === "ArrowDown" && e.ctrlKey) {
    changeProperty('--translate-y', -20, 'px');
  } 
  else if (e.key === "ArrowUp" && e.ctrlKey) {
    changeProperty('--translate-y', 20, 'px');
  } 
  else if (e.key === "ArrowDown") {
    changeProperty('--translate-z', -20, 'px');
  } 
  else if (e.key === "ArrowUp") {
    changeProperty('--translate-z', 20, 'px');
  }
});
