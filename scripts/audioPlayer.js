import playList from "./playList.js";

const playBtn = document.querySelector('.play');
const playNextBtn = document.querySelector('.play-next');
const playPrevBtn = document.querySelector('.play-prev');
const classList = document.querySelector('.play-list');
const playItem = document.querySelector('.play-item');

const audio = new Audio();
let isPlay = false;
let playNum = 0;


function playAudio() {
    classList.querySelectorAll(".play-item")[playNum].classList.toggle("item-active");

    if(!isPlay) {
        isPlay = true;
        audio.src = playList[playNum].src;
        audio.currentTime = 0;
        audio.play();
        playBtn.classList.toggle('pause');
    }
    else {
        isPlay = false;
        audio.pause();
        playBtn.classList.toggle('pause');
    }
}

function playNext() {
    classList.querySelectorAll(".play-item")[playNum].classList.toggle("item-active");

    playNum += 1;
    if (playNum > playList.length - 1)  playNum = 0;

    if (!isPlay) {
        isPlay = true;
        playBtn.classList.toggle('pause');
        playAudio();
    }
    else {
        isPlay = false;
        playBtn.classList.toggle('pause');
        audio.pause();
    }
    playAudio();
}

function playPrev() {
    classList.querySelectorAll(".play-item")[playNum].classList.toggle("item-active");

    playNum -= 1;
    if (playNum < 0) playNum = playList.length - 1;

    if (!isPlay) {
        isPlay = true;
        playBtn.classList.toggle('pause');
        playAudio();
    }
    else {
        isPlay = false;
        playBtn.classList.toggle('pause');   
        audio.pause();
    }
    playAudio();
}


playBtn.addEventListener('click', playAudio);
playNextBtn.addEventListener('click', playNext);
playPrevBtn.addEventListener('click', playPrev);

audio.addEventListener('ended', playNext);


for (let i = 0; i < playList.length; i++) {
    const li = document.createElement('li');
    li.classList.add('play-item');
    li.textContent = playList[i].title;
    classList.append(li);
}



