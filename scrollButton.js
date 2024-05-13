const left = document.getElementById('scroll-left');
const right = document.getElementById('scroll-right');
const container = document.getElementById('container');

left.onclick = () => {
    container.scrollBy({
        top: 0,
        left: -400,
        behavior: "smooth"
    })
};
right.onclick = () => {
    container.scrollBy({
        top: 0,
        left: +400,
        behavior: "smooth"
    })
};