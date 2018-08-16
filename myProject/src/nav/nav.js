import zenscroll from './../lib/zenscroll-min.js';
"use stritc";
document.addEventListener("DOMContentLoaded", initNavigation);

function initNavigation() {
  sizeOfDIVNAV();
  fixedNAVonScroll();
  scrollingOnClick();
}

function sizeOfDIVNAV() {
  setSizeOfDIVNAV();
  window.addEventListener("resize", function() {
    setSizeOfDIVNAV();
  });
}

function setSizeOfDIVNAV() {
  let navContainer = document.querySelector("div.nav");
  let nav = document.querySelector("nav").offsetHeight;
  navContainer.style.boxSizing = "content-box";
  navContainer.style.height = nav + "px";
}

function fixedNAVonScroll() {
  window.addEventListener("scroll", decideIfFixedOrStatic);
  hamburgerForMobileNav();
}

function decideIfFixedOrStatic() {
  let navContainer = document.querySelector("div.nav");
  let nav = document.querySelector("nav");
  if (window.pageYOffset >= navContainer.offsetHeight) {
    nav.classList.add("on-scroll");
  } else {
    nav.classList.remove("on-scroll");
    let bar = document.querySelector("div.nav nav .nav_pos2");
    bar.classList.remove("on-show");
  }
}

function hamburgerForMobileNav() {
  let ham = document.querySelector("div.nav nav .nav_pos1 i");
  ham.addEventListener("click", function() {
    let bar = document.querySelector("div.nav nav .nav_pos2");
    bar.classList.toggle("on-show");
  });
}

function scrollingOnClick() {
  let btns = document.querySelectorAll("li");
  let secs = document.querySelectorAll(".random");
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      let detectPortrait = (function() {
        let ratio = window.innerHeight / window.innerWidth;
        let detect = ratio > 1 ? true : false;
        return detect;
      })();
      let detectWidth = (function() {
        let wid = window.innerWidth;
        let detect = wid <= 600 ? true : false;
        return detect;
      })();
      let fromTop = (function() {
        let initialPosition = window.pageYOffset;
        let detect =
          initialPosition <= document.querySelector("div.nav").offsetHeight
            ? true
            : false;
        return detect;
      })();
      let x = secs[i].offsetTop;
      let y = document.querySelector("div.nav .nav_pos1").offsetHeight + 15;
      let z = document.querySelector("div.nav .nav_pos2").offsetHeight;
      if (detectPortrait === true && detectWidth === true && fromTop === true) {
        z = 0;
      }
      zenscroll.toY(x - (y + z));
    });
  }
}

