const audio = new Audio("bell.wav");
const elements = ["#btnImg", "#btnOverlay"].map(el =>
  document.querySelector(el)
);
let isPlaying = false;
let timeoutId;

document.querySelector("#btn").addEventListener("click", function() {
  elements.forEach(el => {
    el.classList.toggle("u-invisible");
  });
  if (isPlaying) {
    audio.pause();
    audio.currentTime = 0;
    clearInterval(timeoutId);
  } else {
    audio.play();
    timeoutId = setInterval(() => audio.play(), 5*60*1000);
  }
  isPlaying = !isPlaying;
});
