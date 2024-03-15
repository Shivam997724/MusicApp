// initialize the variables 
let songIndex = 0;
let audioElement = new Audio("songs/8.mp3");
let masterplay = document.getElementById("masterplay");
let myprogressbar = document.getElementById("myProgressBar")
let gif = document.getElementById("gif")
let masterSongName = document.getElementById("masterSongName")
let songItems = Array.from(document.getElementsByClassName("songItem"))


let songs = [
  { songName: "B_PRAAK- Album ", filePath: "songs/1.mp3", coverPath: "images/download (2).jpg" },
  { songName: "BEKHAYALI _ KABIR SINGH SONGS ", filePath: "songs/2.mp3", coverPath: "images/download (3).jpg" },
  { songName: "IK TERA _ PUNJABI SONGS ", filePath: "songs/7.mp3", coverPath: "images/download (3).jpg" },
  { songName: "PUNJABI SONG-AKULL", filePath: "songs/3.mp3", coverPath: "images/500x500.jpg" },
  { songName: "ARJIT SINGH -SONGS ", filePath: "songs/5.mp3", coverPath: "images/1280809.jpg" },
  { songName: "AADI RAGHUVANSHI-BABA", filePath: "songs/6.mp3", coverPath: "images/download.jpg" },
  { songName: "CHAL CHAL VE TU BANDEYA_ARJIT SINGH ", filePath: "songs/4.mp3", coverPath: "images/download (1).jpg" },
  { songName: "BANDEYA RE BANDEya- simba ", filePath: "songs/8.mp3", coverPath: "images/Simmba-Hindi-2018-20181227075008-500x500.jpg" },
]

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

//  audioElement.play();

// handle play/pause click 
masterplay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterplay.classList.remove('fa-circle-play')
    masterplay.classList.add('fa-circle-pause')
    gif.style.opacity = 1;
  }
  else {
    audioElement.pause();
    masterplay.classList.remove('fa-circle-pause')
    masterplay.classList.add('fa-circle-play')
    gif.style.opacity = 0;
  }
})
//  listen events 

audioElement.addEventListener("timeupdate", () => {
  // console.log("timeupdate");
  // update seek bar 
  progress = parseInt(audioElement.currentTime / audioElement.duration * 100)
  // console.log(progress);
  myprogressbar.value = progress;

})

myprogressbar.addEventListener("change", () => {
  audioElement.currentTime = myprogressbar.value * audioElement.duration / 100;
})

const makeAllplays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.classList.remove("fa-circle-pause")
    element.classList.add("fa-circle-play")
  })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
  element.addEventListener("click", (e) => {
    makeAllplays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove("fa-circle-play");
    e.target.classList.add("fa-circle-pause");
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText= songs[songIndex].songName
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    
  })
})

document.getElementById("next").addEventListener("click", () => {
  if (songIndex <= 8) {
    songIndex = 0;
  }
  else {
    songIndex += 1
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterSongName.innerText= songs[songIndex].songName
  masterplay.classList.remove('fa-circle-play');
  masterplay.classList.add('fa-circle-pause');
})

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  }
  else {
    songIndex -= 1
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterSongName.innerText= songs[songIndex].songName
  masterplay.classList.remove('fa-circle-play');
  masterplay.classList.add('fa-circle-pause');
})
