import "./vars.scss";
import "./mixes.scss";
import "./generals.scss";
import "./a-header.scss";
import "./b-header.scss";

import "./a-navbar.js";
import "./animation.js";

'use strict';
document.addEventListener('DOMContentLoaded', initNavBar);

function initNavBar() {
    initSearchBtn();
    initScrollNavi();
}
export function navBarHeight() {
    let nav = document.querySelector('.elbi-nav nav').offsetHeight;
    return nav;
}
function initSearchBtn() {
    let searchBtn = document.querySelector('.elbi-nav_nav_item_search');
    searchBtn.addEventListener('click', function () {
        document.querySelector('.elbi-nav_nav_item input').classList.toggle('isactive');
    });
}

function initScrollNavi() {
    window.addEventListener('scroll', function () {
        let navH = navBarHeight();
        let nav = document.querySelector('.elbi-nav nav');
        if (window.pageYOffset >= navH) {
            nav.classList.add('fixed');
        } else {
            nav.classList.remove('fixed');
        }
    });
}
