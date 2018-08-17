document.addEventListener("DOMContentLoaded", function () {
    let hamburger = document.querySelector(".grid-item-hamburger");
    let mobilemenu = document.querySelector(
        ".head_navbar_nav_left-belt_menu-list"
    );
    let iterator = 0;
    hamburger.addEventListener("click", function () {
        toggleMenu();
    });

    function toggleMenu() {
        if (!iterator) mobilemenu.classList.add("toggle-on-mobile-devices");
        else mobilemenu.classList.remove("toggle-on-mobile-devices");
        iterator = iterator ? 0 : 1;
    }

    let fixedmenu = document.querySelector(".head_navbar_nav");
    let fixedmenuContainer = document.querySelector(".head_navbar");
    window.addEventListener("scroll", function () {
        let barHeight = scrollPositionDetection();
        if (window.pageYOffset > barHeight) {
            fixedmenu.classList.add("onpagemove");
            fixedmenuContainer.style.height = fixedmenu.offsetHeight + "px";
        } else {
            fixedmenu.classList.remove("onpagemove");
            fixedmenuContainer.style.height = "";
        }
    });

    function scrollPositionDetection() {
        return fixedmenu.offsetHeight;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    let headerSlider = document.querySelector('.container_slider');
    let iterator = -2;
    let timer1;
    setTimeout(sliderMotion, 5000);
    function sliderMotion() {
        if (iterator<0) {iterator++}
        else {iterator = -2};
        headerSlider.style.left = iterator*100+'%';
        timer1 = setTimeout(sliderMotion, 7000);
        btns[0].classList.remove('itIsChecked');
        btns[1].classList.remove('itIsChecked');
        btns[2].classList.remove('itIsChecked');
        btns[iterator*-1].classList.add('itIsChecked');
    };
    let btns = document.querySelectorAll('.container_content_item_slide-btn');
    for (let i=0;i<3;i++){
        btns[i].addEventListener('click', function(){
            headerSlider.style.left = (0-i) * 100 + '%';
             btns[0].classList.remove('itIsChecked');
             btns[1].classList.remove('itIsChecked');
             btns[2].classList.remove('itIsChecked');
            btns[i].classList.add('itIsChecked');
            clearTimeout(timer1);
            setTimeout(sliderMotion, 9000)
        })
    }

});

document.addEventListener("DOMContentLoaded", function () {
    let thisSliderDots = document.querySelectorAll(".sn1_slider-dot");
    for (let i=0; i<3;i++){
        thisSliderDots[i].addEventListener('click', function(){
            initPosition=0-i;
            sliderMovement();
        })
    }
    let leftAngle = document.querySelector(".sn1_slider-btn.left-angle");
    let rightAngle = document.querySelector(".sn1_slider-btn.right-angle");
    let slider = document.querySelector(".sn1_slider-wrapper");
    let initPosition = 0;
    rightAngle.addEventListener('click', moveSliderOpposite);
    leftAngle.addEventListener('click', moveSlider);
    function moveSlider(){
        if (initPosition<0){
            initPosition++;
            sliderMovement();
        }
    }
    function moveSliderOpposite() {
        if (initPosition > -2) {
            initPosition--;
            sliderMovement();
        }
    }
    function sliderMovement(){
        slider.style.left=(initPosition*100)+'%';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    let a = document.querySelector('.firstdescribe');
    let b = document.querySelector('.seconddescribe');
    let c = document.querySelector('.thirddescribe');
    let btns = [a,b,c];
    let marker = document.querySelector('.switch-search-marker');
    let positions = ['firstState','secondState','thirdState'];
    btns.forEach(function(item, idx){
        item.addEventListener('click', function(){
            marker.classList.remove(positions[0], positions[1], positions[2]);
            marker.classList.add(positions[idx]);
        })
    })
});