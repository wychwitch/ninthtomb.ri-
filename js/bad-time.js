const pesterButton = document.getElementById("pester-button");
const audio = document.getElementById("sans-music");
const pesterlog = document.getElementById("pesterlog");

pesterButton.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
  } else {
    audio.currentTime = 0;
    audio.pause();
  }
  pesterlog.classList.toggle("hidden");
});
