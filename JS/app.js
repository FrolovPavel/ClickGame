let click = 1;
const TIMEOUT = 5000;
const display = document.querySelector('.display'),
button = document.querySelector('.button'),
counter = document.querySelector('.counter');

button.onclick = start;

function start() {
    button.onclick = () => counter.textContent = click++;

    setTimeout(()=>{
        button.onclick = null;
        display.textContent = 'Game over';
    }, TIMEOUT);

}

let test
let teat













