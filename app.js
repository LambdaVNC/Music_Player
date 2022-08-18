const container = document.querySelector(".container");
const image = document.querySelector("#music-image");
const title = document.querySelector("#music-details .title");
const singer = document.querySelector("#music-details .singer");
const prev = document.querySelector(".controls #prev");
const play = document.querySelector(".controls #play");
const next = document.querySelector(".controls #next");

const player = new MusicPlayer(musicList);

window.addEventListener("load", () => {
  let music = player.getMusic();
  displayMusic(music);
});

function displayMusic(music) {
  title.innerText = music.title;
  singer.innerText = music.singer;
  image.src = "img/" + music.img;
  audio.src = "mp3/" + music.file;
}

play.addEventListener("click", () => {
  const isMusicPlay = container.classList.contains("playing");
  isMusicPlay ? pauseMusic() : playMusic();
});

prev.addEventListener("click", () => {
  if (container.classList.contains("playing")) {
    play.classList = "fa-solid fa-play";
  }
  prevMusic();
});

next.addEventListener("click", () => {
  if (container.classList.contains("playing")) {
    play.classList = "fa-solid fa-play";
  }
  nextMusic();
});

function nextMusic() {
  player.next();
  let music = player.getMusic();
  displayMusic(music);
}

function prevMusic() {
  player.prev();
  let music = player.getMusic();
  displayMusic(music);
}
function pauseMusic() {
  container.classList.remove("playing");
  play.classList = "fa-solid fa-play";
  audio.pause();
}

function playMusic() {
  play.classList = "fa-solid fa-pause";
  container.classList.add("playing");
  audio.play();
}
