import './vars.scss';
import './mixes.scss';
import './generals.scss';
import './a-header.scss';
document.addEventListener('DOMContentLoaded', function () {
    let hamburger = document.querySelector('.grid-item-hamburger');
    let mobilemenu = document.querySelector('.head_navbar_nav_left-belt_menu-list');
    let iterator=0;
    hamburger.addEventListener('click', function(){
        toggleMenu();
    });
    function toggleMenu(){
        if (!iterator) mobilemenu.classList.add('toggle-on-mobile-devices');
        else mobilemenu.classList.remove('toggle-on-mobile-devices');
        iterator = iterator? 0:1;
    }

    let fixedmenu = document.querySelector('.head_navbar_nav');

    window.addEventListener('scroll', function () {
        fixedmenu.classList.add('onpagemove');
    });
})
