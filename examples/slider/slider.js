let images = document.querySelectorAll("#gallery .photos img");
let prev = document.querySelector(".slider .control #prev");
let next = document.querySelector(".slider .control #next");

let i = 0;

next.onclick = function () {
    nextImg();
};

prev.onclick = function () {
    images[i--].className = '';
    if (i < 0) {
        i = images.length - 1;
    }
    images[i].className = 'showed';
};

function nextImg() {
    images[i++].className = '';
    if (i > images.length - 1) {
        i = 0;
    }
    images[i].className = 'showed';
}

setInterval(nextImg, 3*1000);
