let click = 1;
const TIMEOUT = 5000;
const display = document.querySelector('.display'),
button = document.querySelector('.button'),
counter = document.querySelector('.counter'),
reset = document.querySelector('.reset');

button.onclick = start;
reset.onclick = () => window.location.reload();
function start() {
        const startTime = Date.now();
        button.onclick = () => counter.textContent = click++;

        const inteval = setInterval(() => {
            const delta = Date.now() - startTime;
            display.textContent = formatTime(TIMEOUT - delta);

        }, 100)

        setTimeout(() => {
            button.onclick = null;
            display.textContent = 'Game over';

            clearInterval(inteval);
        }, TIMEOUT);

        function formatTime(ms) {
            return Number.parseFloat(ms / 1000).toFixed(2);
        }
}










