const openBtn = document.querySelector('#openModal');
const closeBtn = document.querySelector('#closeModal');
const overlay = document.querySelector('#overlay');

const progressBar = document.querySelector('#progressBar');
const progressText = document.querySelector('#progressText');

let progress = 0;
let interval;

function startProgress() {
    progress = 0;
    progressBar.style.width = '0%';

    const duration = 3000;
    const fps = 60;
    const intervalTime = 1000 / fps;
    const step = 100 / (duration / intervalTime);

    interval = setInterval(() => {
        progress += step;

        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
        }
        progressBar.style.width = progress + '%';
        if (progress > 50) {
            progressText.style.color = 'white';
        } else {
            progressText.style.color = 'black';
        }

    }, intervalTime);
}

openBtn.addEventListener('click', () => {
    overlay.style.display = 'flex';
    startProgress();
});

closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    clearInterval(interval);
});

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.style.display = 'none';
        clearInterval(interval);
    }
});