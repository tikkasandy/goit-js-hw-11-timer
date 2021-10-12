import refs from './js/refs';
import colors from './js/colors';

const { body, startBtn, stopBtn } = refs;
let timerId = null;


const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
    timerId = setInterval(changeColor, 1000);
    startBtn.disabled = true;
};

function changeColor(e) {
    const currentColor = colors[randomIntegerFromInterval(0, colors.length - 1)];

    body.style.backgroundColor = currentColor;
};

function onStopBtnClick() {
    clearInterval(timerId);
    startBtn.disabled = false;
};
