let doFullPage = document.body.clientWidth;

let speed = 0;
let par = document.querySelector('.header'); //<=== Указати класс в середені якого буде паралакс
checkParalax(doFullPage);

window.addEventListener("resize", function (event) {
    doFullPage = document.body.clientWidth;
    checkParalax(doFullPage);
});

function paralax(event) {
    let height = par.offsetHeight / 2;
    this.querySelectorAll('.par').forEach(par => { //<=== Указати класс з картинкою яка буде рухатися
        speed = par.getAttribute('data-speed');
        par.style.transform = `translate(${(event.clientX - height) * speed / 10}px, ${(event.clientY - height) * speed / 10}px)`;
        par.style.transition = 'transform 0s'
    });
}

function paralaxStop(event) {
    this.querySelectorAll('.par').forEach(par => {
        speed = par.getAttribute('data-speed');
        par.style.transform = translate(0);
        par.style.transition = 'transform 0.5s' //<=== Швидкість анімації зупинення
    });
}

function checkParalax(doFullPage) {
    if (doFullPage > 1200) { //<=== На якому брейкпоінті включать паралакс
        par.addEventListener("mousemove", paralax);
        par.addEventListener("mouseout", paralaxStop);
    } else {
        par.removeEventListener("mousemove", paralax);
        par.removeEventListener("mouseout", paralaxStop);
    }
}