//slider
var curimg = 0;
const sliders = [
    { src: 'https://ldt2711.github.io/WebAssignment/assets/img/acquy.png', link: 'https://example.com/page1' },
    { src: 'https://ldt2711.github.io/WebAssignment/assets/img/nobody.jpg', link: 'https://example.com/page2' },
    { src: 'https://ldt2711.github.io/WebAssignment/assets/img/venom.png', link: 'https://example.com/page3' },
    { src: 'https://ldt2711.github.io/WebAssignment/assets/img/codauhaomon.png', link: 'https://example.com/page4' }
];
let auto;


function doilink() {
    document.getElementById('img-link').href = sliders[curimg].link;
    document.getElementById('img').src = sliders[curimg].src;
}


function next() {
    curimg += 1;
    if (curimg >= sliders.length) {
        curimg = 0;
    }
    doilink();
}


function prev() {
    curimg -= 1;
    if (curimg < 0) {
        curimg = sliders.length - 1;
    }
    doilink();
}


function autoslider() {
    auto = setInterval(next, 3000);
}


function reset() {
    clearInterval(auto); 
    autoslider(); 
}

autoslider();


document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('.btn-left').addEventListener('click', () => {
        prev(); 
        reset();
    });

    document.querySelector('.btn-right').addEventListener('click', () => {
        next(); 
        reset();
    });
});
//content

