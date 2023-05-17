const block = document.getElementById("block");
const circle = document.getElementById("circle");

const circleBig = circle.offsetWidth;
const circleX = circle.offsetLeft;
const circleY = circle.offsetTop;

const radius = circleBig / 2 - block.offsetWidth / 2;

let timeof = 0;

function animate() {
    const x = circleX + circleBig / 2 + radius * Math.cos(timeof) - block.offsetWidth / 2;
    const y = circleY + circleBig / 2 + radius * Math.sin(timeof) - block.offsetHeight / 2;

    block.style.left = x + "px";
    block.style.top = y + "px";

    timeof += 0.05;

    if (timeof >= 2 * Math.PI) {
        timeof = 0;
    }

    setTimeout(animate, 10);
}

animate();

let timeLimit = 3 * 30 * 100;

let timer;

function startTimer() {
    clearTimeout(timer);

    timer = setTimeout(function() {
        alert("Your time is finished!!!");


    }, timeLimit);
}

startTimer(0);


