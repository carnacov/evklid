// Slider

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 80,
        loop: true,
        // пагинация
        pagination: {
        el: '.swiper-pagination',
        clickable: 'true',
        },
        // навигация
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        });

// Tabs

let tabsBtn= document.querySelectorAll('.working__btn');
let tabsItem= document.querySelectorAll('.working__consultation-item');

tabsBtn.forEach (function (element){
    element.addEventListener('click', function(e){
            const path = e.currentTarget.dataset.path;

            tabsBtn. forEach(function (btn) { btn.classList.remove('working__btn--active')});
            e.currentTarget.classList.add('working__btn--active');

            tabsItem.forEach (function (element) { element.classList.remove('working__consultation-item--active')});
            document.querySelector(`[data-target="${path}"]`).classList.add('working__consultation-item--active');
    });
});

// Accordion

$(".accordion").accordion({
    heightStyle: "content",
    active: "false"
});

// Burger

const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');
const navItems = nav?.querySelectorAll('a');
const body = document.body;
const header = document?.querySelector('.header');
const headerHeight = header.offsetHeight;
console.log(headerHeight)
document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);

burger?.addEventListener('click', () => {
  body.classList.toggle('stop-scroll');
  burger?.classList.toggle('burger--active');
  nav?.classList.toggle('nav--visible');
});

navItems.forEach(el => {
  el.addEventListener('click', () => {
    body.classList.remove('stop-scroll');
  burger?.classList.remove('burger--active');
  nav?.classList.remove('nav--visible');
  });
});

// Search

const openSearchBtn = document.querySelector('.btn-reset__header__search');
const closeSearchBtn = document.querySelector('.close'); 
const boxSearch = document.querySelector('.form__search');

openSearchBtn.addEventListener('click', () => { 
  boxSearch.classList.add('form--active');
});

closeSearchBtn.addEventListener('click', () => {
  boxSearch.classList.remove('form--active');
});