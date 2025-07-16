const body = document.querySelector('body');
const nextSlide = document.querySelector('.slide-next');
const prevSlide = document.querySelector('.slide-prev ');
let numSlide = getRandomNumber();

function getRandomNumber() {
    let min = 1;
    let max = 20;
    let number = Math.floor(Math.random() * (max - min + 1)) + min; 
    return number;
}

function getTimeOfDay() {
    let h = new Date().getHours();
    let output;

    if (h > 6 && h < 12) output = 'morning';
    else if(h > 11 && h < 18) output = 'afternoon';
    else if(h > 18 && h <= 24) output = 'evening';
    else if(h >= 1 && h < 6 ) output = 'night';

    return output;
}

function setBg() {
    const img = new Image();
    img.src = 
    `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${getTimeOfDay()}/${numSlide.toString().padStart(2, '0')}.jpg`;
    img.onload = () => {
        body.style.backgroundImage = `url(${img.src})`
    }
}

function nextPic() {
    numSlide += 1;
    if (numSlide > 20) numSlide = 1;
    setBg();
}

function prevPic() {
    numSlide -= 1;
    if (numSlide < 1) numSlide = 20;
    setBg();
}

setBg();
nextSlide.addEventListener('click', nextPic);
prevSlide.addEventListener('click', prevPic);