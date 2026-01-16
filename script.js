function showPage(id) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    document.getElementById(id).classList.add('active');
    window.scrollTo(0, 0);
}

const galeri = document.querySelector('.galeri-wrapper');

const track = document.querySelector('.galeri-track');
track.innerHTML += track.innerHTML;

let autoScroll;
let isHover = false;

function startAutoScroll() {
autoScroll = setInterval(() => {
if (!isHover) {
galeri.scrollLeft += 1;

        if (galeri.scrollLeft >= track.scrollWidth / 2) {
            galeri.scrollLeft = track.scrollWidth / 2;
        }
    }
}, 20);

}

galeri.addEventListener('mouseenter', () => {
    isHover = true;
});

galeri.addEventListener('mouseleave', () => {
    isHover = false;
});

galeri.addEventListener('touchstart', () => {
    isHover = true;
});

galeri.addEventListener('touchend', () => {
    isHover = false;
});

startAutoScroll();
