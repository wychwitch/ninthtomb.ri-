const pesterButton = document.getElementById("pester-button");
const audio = document.getElementById("sans-music");
const pesterlog = document.getElementById("pesterlog");

pesterButton.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
  }
  pesterlog.classList.toggle("hidden");
});
