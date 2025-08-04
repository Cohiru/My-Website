const scrollUpBtn = document.getElementById("scrollUpBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
};

scrollUpBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
var audio = document.getElementById('audio');
var button = document.getElementById('playPauseBtn');

var playImage = 'play.png';
var pauseImage = 'pause.png';

button.style.backgroundImage = `url(${playImage})`;

button.addEventListener( 'click', () => {
  if (audio.paused) {
    audio.play();
    button.style.backgroundImage = `url(${pauseImage})`;
  } else {
    audio.pause();
    button.style.backgroundImage = `url(${playImage})`;
  }
});