import './vars.scss';
import './mixes.scss';
import './generals.scss';
import './a-header.scss';
import './b-header.scss';
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
    let fixedmenuContainer = document.querySelector('.head_navbar');
    window.addEventListener('scroll', function () {
        let barHeight = scrollPositionDetection();
        if (window.pageYOffset>barHeight) {
             fixedmenu.classList.add('onpagemove');
             fixedmenuContainer.style.height = fixedmenu.offsetHeight + "px";
        }else {
             fixedmenu.classList.remove('onpagemove');
             fixedmenuContainer.style.height = "";
        }
    });
    function scrollPositionDetection () {
       return fixedmenu.offsetHeight;
    }
})
