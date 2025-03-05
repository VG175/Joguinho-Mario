const mario = document.querySelector.querySelector('.mario');

const jump = () => {
    mario.classList.add('jump');
}

document.addEventListener('keydown', jump);