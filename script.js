let cube = document.getElementById("cube");
let currentX = 0;
let currentY = 0;
let animationDuration = 15; // initial duration in seconds

function updateAnimationDuration() {
  cube.style.animationDuration = `${animationDuration}s`;
}

window.addEventListener("mousemove", function (e) {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  cube.style.transform = `rotateY(${currentX + xAxis}deg) rotateX(${
    currentY + yAxis
  }deg)`;
  currentX = currentX + xAxis;
  currentY = currentY + yAxis;
});

window.addEventListener("touchmove", function (e) {
  let xAxis = (window.innerWidth / 2 - e.touches[0].pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.touches[0].pageY) / 25;
  cube.style.transform = `rotateY(${currentX + xAxis}deg) rotateX(${
    currentY + yAxis
  }deg)`;
  currentX = currentX + xAxis;
  currentY = currentY + yAxis;
});

document.getElementById("decreaseSpeed").addEventListener("click", function () {
  animationDuration += 1;
  updateAnimationDuration();
});

document.getElementById("increaseSpeed").addEventListener("click", function () {
  if (animationDuration > 1) {
    animationDuration -= 1;
    updateAnimationDuration();
  }
});

updateAnimationDuration();
