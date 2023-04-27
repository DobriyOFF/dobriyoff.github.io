let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav');
let menulinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',

function() {

  burger.classList.toggle('burger--active');

  menu.classList.toggle('nav--active');

  document.body.classList.toggle('stop--scroll');
})

menulinks.forEach(function(el){
  el.addEventListener('click', function() {

    burger.classList.remove('burger--active');

    menu.classList.remove('nav--active');

    document.body.classList.remove('stop--scroll');
  })
})

let swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,

  },
})

let tabsBtn = document.querySelectorAll('.work__link-btn');
let tabsItem = document.querySelectorAll('.work__blog');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('work__link-btn--active')});
    e.currentTarget.classList.add('work__link-btn--active');

    tabsItem.forEach(function(element){ element.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  })
})


new Accordion('.accordion-container');

let btnicon = document.querySelector('.btn-icon');
let header__div = document.querySelector('.header__div')
let search__close = document.querySelector('.search__close');
let block__search = document.querySelector('.header__block-search');
let search__icon = document.querySelector('.search__icon');

btnicon.addEventListener('click',
function() {
  header__div.classList.add('header__div--active');
  block__search.classList.add('header__block-search--active');
  search__close.classList.add('search__close--active');
  search__icon.classList.add('search__icon--active');
})

search__close.addEventListener('click', function(){
    header__div.classList.remove('header__div--active');
  })

