const name = document.querySelector('.name');
let h = new Date().getHours();
let message;

if(h > 6 && h < 12) message = 'Good morning';
else if(h > 11 && h < 19) message = 'Good day';
else if(h > 18 && h < 24) message = 'Good evening';
else if(h > 23 || h < 7) message = 'Good night';

document.querySelector('.greeting').innerHTML = `${message},`;

function setLocalStorage() {
    localStorage.setItem("name", name.value);
}
window.addEventListener("beforeunload", setLocalStorage);

function getLocalStorage() {
    const nameFromLS = localStorage.getItem("name");

    if (nameFromLS !== null) {
    name.value = nameFromLS;
    }
}
window.addEventListener("load", getLocalStorage);