const burger = document.querySelector(`#burger`);
const Links = document.querySelector(`#Links`);

burger.addEventListener(`click`, function() {
    Links.classList.toggle(`active`)
});

//--date--//
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

//--sticky navbar--//
const navbar = document.getElementById(`Links-container`);
const showLink = document.getElementById(`toTop`);
window.addEventListener(`scroll`, function() {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navbar.classList.add(`active`);
    } else {
        navbar.classList.remove(`active`);
    }
    if (scrollHeight > 500) {
        showLink.classList.add(`active`);
    } else {
        showLink.classList.remove(`active`);
    }
});
const scrollLinks = document.querySelectorAll(`.scroll-link`);

//--scrolling to the right paleces--//
scrollLinks.forEach(function (link) {
    link.addEventListener (`click`, function (e) {
        e.preventDefault();
        const id = e.currentTarget.getAttribute(`href`).slice(1);
        const element = document.getElementById(id);
        const navHeight = navbar.getBoundingClientRect().height;
        let position = element.offsetTop - navHeight;
        window.scrollTo({
            left: 0,
            top: position,
        });
        Links.classList.remove(`active`);
    });
});
//--back to top-->
const back = document.querySelector(`#toTop`);

back.addEventListener(`click`, function () {
    window.scrollTo({
        top: 0,
    });
});
const home = document.querySelector(`#home`); 

home.addEventListener(`click`, function () {
    window.scrollTo({
        top: 0,
    });
    Links.classList.remove(`active`);
});

