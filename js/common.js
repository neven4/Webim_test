let lang = document.querySelector('.lang');
let lang_menu = document.querySelector('.menu');
let burger = document.querySelector('.burger-btn');
let btns = document.querySelector('.btns');


lang.addEventListener('click', function () {
	lang_menu.classList.toggle('show');
})

burger.addEventListener('click', function () {
	btns.classList.toggle('show');
})