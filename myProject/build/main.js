!function(){"use strict";var L,y,n,g,p,i;document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".grid-item-hamburger"),t=document.querySelector(".head_navbar_nav_left-belt_menu-list"),n=0;e.addEventListener("click",function(){!function(){n?t.classList.remove("toggle-on-mobile-devices"):t.classList.add("toggle-on-mobile-devices");n=n?0:1}()});var i=document.querySelector(".head_navbar_nav"),o=document.querySelector(".head_navbar");window.addEventListener("scroll",function(){var e=i.offsetHeight;window.pageYOffset>e?(i.classList.add("onpagemove"),o.style.height=i.offsetHeight+"px"):(i.classList.remove("onpagemove"),o.style.height="")})}),document.addEventListener("DOMContentLoaded",function(){var t=document.querySelector(".container_slider"),e=-2,n=void 0;function i(){e<0?e++:e=-2,t.style.left=100*e+"%",n=setTimeout(i,7e3),o[0].classList.remove("itIsChecked"),o[1].classList.remove("itIsChecked"),o[2].classList.remove("itIsChecked"),o[-1*e].classList.add("itIsChecked")}setTimeout(i,5e3);for(var o=document.querySelectorAll(".container_content_item_slide-btn"),c=function(e){o[e].addEventListener("click",function(){t.style.left=100*(0-e)+"%",o[0].classList.remove("itIsChecked"),o[1].classList.remove("itIsChecked"),o[2].classList.remove("itIsChecked"),o[e].classList.add("itIsChecked"),clearTimeout(n),setTimeout(i,9e3)})},d=0;d<3;d++)c(d)}),document.addEventListener("DOMContentLoaded",function(){for(var t=document.querySelectorAll(".sn1_slider-dot"),e=function(e){t[e].addEventListener("click",function(){d=0-e,r()})},n=0;n<3;n++)e(n);var i=document.querySelector(".sn1_slider-btn.left-angle"),o=document.querySelector(".sn1_slider-btn.right-angle"),c=document.querySelector(".sn1_slider-wrapper"),d=0;function r(){c.style.left=100*d+"%"}o.addEventListener("click",function(){-2<d&&(d--,r())}),i.addEventListener("click",function(){d<0&&(d++,r())})}),document.addEventListener("DOMContentLoaded",function(){var e=[document.querySelector(".firstdescribe"),document.querySelector(".seconddescribe"),document.querySelector(".thirddescribe")],n=document.querySelector(".switch-search-marker"),i=["firstState","secondState","thirdState"];e.forEach(function(e,t){e.addEventListener("click",function(){n.classList.remove(i[0],i[1],i[2]),n.classList.add(i[t])})})}),document.addEventListener("DOMContentLoaded",function(){var t=document.querySelector("#dynamictxt"),n="ELBi - Lepsza strona techniki!";t.innerText="";var i=0;!function e(){t.innerText=t.innerText+n.charAt(i),++i<n.length&&setTimeout(e,50)}()}),document.addEventListener("DOMContentLoaded",function(){L=document.getElementById("canvas"),g=document.getElementById("animation_container"),p=document.getElementById("dom_overlay_container");var e=AdobeAn.getComposition("8F70137161B34D8E97BE608938403439");e.getLibrary();!function(e,t){var f=t.getLibrary();t.getSpriteSheet();n=new f.Elbiilustracja,y=new f.Stage(L),i=function(){y.addChild(n),createjs.Ticker.setFPS(f.properties.fps),createjs.Ticker.addEventListener("tick",y)},function(s,a,l,u){var m,v,h=1;function e(){var e=f.properties.width,t=f.properties.height,n=window.innerWidth,i=window.innerHeight,o=window.devicePixelRatio||1,c=n/e,d=i/t,r=1;s&&("width"==a&&m==n||"height"==a&&v==i?r=h:l?1==u?r=Math.min(c,d):2==u&&(r=Math.max(c,d)):(n<e||i<t)&&(r=Math.min(c,d))),L.width=e*o*r,L.height=t*o*r,L.style.width=p.style.width=g.style.width=e*r+"px",L.style.height=g.style.height=p.style.height=t*r+"px",y.scaleX=o*r,y.scaleY=o*r,m=n,v=i,h=r,y.tickOnUpdate=!1,y.update(),y.tickOnUpdate=!0}window.addEventListener("resize",e),e()}(!1,"both",!1,1),AdobeAn.compositionLoaded(f.properties.id),i()}(0,e)}),document.addEventListener("DOMContentLoaded",function(){document.querySelector(".elbi-nav_nav_item_search").addEventListener("click",function(){document.querySelector(".elbi-nav_nav_item input").classList.toggle("isactive")})})}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL2FuaW1hdGlvbi5qcyIsIi4uL3NyYy9hLW5hdmJhci5qcyIsIi4uL3NyYy9lbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdCk7XHJcbnZhciBjYW52YXMsIHN0YWdlLCBleHBvcnRSb290LCBhbmltX2NvbnRhaW5lciwgZG9tX292ZXJsYXlfY29udGFpbmVyLCBmblN0YXJ0QW5pbWF0aW9uO1xyXG5cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xyXG4gICAgYW5pbV9jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW1hdGlvbl9jb250YWluZXJcIik7XHJcbiAgICBkb21fb3ZlcmxheV9jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvbV9vdmVybGF5X2NvbnRhaW5lclwiKTtcclxuICAgIHZhciBjb21wID0gQWRvYmVBbi5nZXRDb21wb3NpdGlvbihcIjhGNzAxMzcxNjFCMzREOEU5N0JFNjA4OTM4NDAzNDM5XCIpO1xyXG4gICAgdmFyIGxpYiA9IGNvbXAuZ2V0TGlicmFyeSgpO1xyXG4gICAgaGFuZGxlQ29tcGxldGUoe30sIGNvbXApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVDb21wbGV0ZShldnQsIGNvbXApIHtcclxuICAgIC8vVGhpcyBmdW5jdGlvbiBpcyBhbHdheXMgY2FsbGVkLCBpcnJlc3BlY3RpdmUgb2YgdGhlIGNvbnRlbnQuIFlvdSBjYW4gdXNlIHRoZSB2YXJpYWJsZSBcInN0YWdlXCIgYWZ0ZXIgaXQgaXMgY3JlYXRlZCBpbiB0b2tlbiBjcmVhdGVfc3RhZ2UuXHJcbiAgICB2YXIgbGliID0gY29tcC5nZXRMaWJyYXJ5KCk7XHJcbiAgICB2YXIgc3MgPSBjb21wLmdldFNwcml0ZVNoZWV0KCk7XHJcbiAgICBleHBvcnRSb290ID0gbmV3IGxpYi5FbGJpaWx1c3RyYWNqYSgpO1xyXG4gICAgc3RhZ2UgPSBuZXcgbGliLlN0YWdlKGNhbnZhcyk7XHJcbiAgICAvL1JlZ2lzdGVycyB0aGUgXCJ0aWNrXCIgZXZlbnQgbGlzdGVuZXIuXHJcbiAgICBmblN0YXJ0QW5pbWF0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHN0YWdlLmFkZENoaWxkKGV4cG9ydFJvb3QpO1xyXG4gICAgICAgIGNyZWF0ZWpzLlRpY2tlci5zZXRGUFMobGliLnByb3BlcnRpZXMuZnBzKTtcclxuICAgICAgICBjcmVhdGVqcy5UaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcihcInRpY2tcIiwgc3RhZ2UpO1xyXG4gICAgfVxyXG4gICAgLy9Db2RlIHRvIHN1cHBvcnQgaGlkcGkgc2NyZWVucyBhbmQgcmVzcG9uc2l2ZSBzY2FsaW5nLlxyXG4gICAgZnVuY3Rpb24gbWFrZVJlc3BvbnNpdmUoaXNSZXNwLCByZXNwRGltLCBpc1NjYWxlLCBzY2FsZVR5cGUpIHtcclxuICAgICAgICB2YXIgbGFzdFcsIGxhc3RILCBsYXN0UyA9IDE7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUNhbnZhcyk7XHJcbiAgICAgICAgcmVzaXplQ2FudmFzKCk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHJlc2l6ZUNhbnZhcygpIHtcclxuICAgICAgICAgICAgdmFyIHcgPSBsaWIucHJvcGVydGllcy53aWR0aCxcclxuICAgICAgICAgICAgICAgIGggPSBsaWIucHJvcGVydGllcy5oZWlnaHQ7XHJcbiAgICAgICAgICAgIHZhciBpdyA9IHdpbmRvdy5pbm5lcldpZHRoLFxyXG4gICAgICAgICAgICAgICAgaWggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgICAgIHZhciBwUmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxLFxyXG4gICAgICAgICAgICAgICAgeFJhdGlvID0gaXcgLyB3LFxyXG4gICAgICAgICAgICAgICAgeVJhdGlvID0gaWggLyBoLFxyXG4gICAgICAgICAgICAgICAgc1JhdGlvID0gMTtcclxuICAgICAgICAgICAgaWYgKGlzUmVzcCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKChyZXNwRGltID09ICd3aWR0aCcgJiYgbGFzdFcgPT0gaXcpIHx8IChyZXNwRGltID09ICdoZWlnaHQnICYmIGxhc3RIID09IGloKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNSYXRpbyA9IGxhc3RTO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghaXNTY2FsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdyA8IHcgfHwgaWggPCBoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzUmF0aW8gPSBNYXRoLm1pbih4UmF0aW8sIHlSYXRpbyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNjYWxlVHlwZSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc1JhdGlvID0gTWF0aC5taW4oeFJhdGlvLCB5UmF0aW8pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzY2FsZVR5cGUgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNSYXRpbyA9IE1hdGgubWF4KHhSYXRpbywgeVJhdGlvKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSB3ICogcFJhdGlvICogc1JhdGlvO1xyXG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaCAqIHBSYXRpbyAqIHNSYXRpbztcclxuICAgICAgICAgICAgY2FudmFzLnN0eWxlLndpZHRoID0gZG9tX292ZXJsYXlfY29udGFpbmVyLnN0eWxlLndpZHRoID0gYW5pbV9jb250YWluZXIuc3R5bGUud2lkdGggPSB3ICogc1JhdGlvICtcclxuICAgICAgICAgICAgICAgICdweCc7XHJcbiAgICAgICAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBhbmltX2NvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBkb21fb3ZlcmxheV9jb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gaCAqIHNSYXRpbyArXHJcbiAgICAgICAgICAgICAgICAncHgnO1xyXG4gICAgICAgICAgICBzdGFnZS5zY2FsZVggPSBwUmF0aW8gKiBzUmF0aW87XHJcbiAgICAgICAgICAgIHN0YWdlLnNjYWxlWSA9IHBSYXRpbyAqIHNSYXRpbztcclxuICAgICAgICAgICAgbGFzdFcgPSBpdztcclxuICAgICAgICAgICAgbGFzdEggPSBpaDtcclxuICAgICAgICAgICAgbGFzdFMgPSBzUmF0aW87XHJcbiAgICAgICAgICAgIHN0YWdlLnRpY2tPblVwZGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBzdGFnZS51cGRhdGUoKTtcclxuICAgICAgICAgICAgc3RhZ2UudGlja09uVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBtYWtlUmVzcG9uc2l2ZShmYWxzZSwgJ2JvdGgnLCBmYWxzZSwgMSk7XHJcbiAgICBBZG9iZUFuLmNvbXBvc2l0aW9uTG9hZGVkKGxpYi5wcm9wZXJ0aWVzLmlkKTtcclxuICAgIGZuU3RhcnRBbmltYXRpb24oKTtcclxufSAiLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgaGFtYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncmlkLWl0ZW0taGFtYnVyZ2VyXCIpO1xyXG4gICAgbGV0IG1vYmlsZW1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIFwiLmhlYWRfbmF2YmFyX25hdl9sZWZ0LWJlbHRfbWVudS1saXN0XCJcclxuICAgICk7XHJcbiAgICBsZXQgaXRlcmF0b3IgPSAwO1xyXG4gICAgaGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdG9nZ2xlTWVudSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlTWVudSgpIHtcclxuICAgICAgICBpZiAoIWl0ZXJhdG9yKSBtb2JpbGVtZW51LmNsYXNzTGlzdC5hZGQoXCJ0b2dnbGUtb24tbW9iaWxlLWRldmljZXNcIik7XHJcbiAgICAgICAgZWxzZSBtb2JpbGVtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJ0b2dnbGUtb24tbW9iaWxlLWRldmljZXNcIik7XHJcbiAgICAgICAgaXRlcmF0b3IgPSBpdGVyYXRvciA/IDAgOiAxO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBmaXhlZG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRfbmF2YmFyX25hdlwiKTtcclxuICAgIGxldCBmaXhlZG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRfbmF2YmFyXCIpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBiYXJIZWlnaHQgPSBzY3JvbGxQb3NpdGlvbkRldGVjdGlvbigpO1xyXG4gICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiBiYXJIZWlnaHQpIHtcclxuICAgICAgICAgICAgZml4ZWRtZW51LmNsYXNzTGlzdC5hZGQoXCJvbnBhZ2Vtb3ZlXCIpO1xyXG4gICAgICAgICAgICBmaXhlZG1lbnVDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gZml4ZWRtZW51Lm9mZnNldEhlaWdodCArIFwicHhcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmaXhlZG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm9ucGFnZW1vdmVcIik7XHJcbiAgICAgICAgICAgIGZpeGVkbWVudUNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNjcm9sbFBvc2l0aW9uRGV0ZWN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBmaXhlZG1lbnUub2Zmc2V0SGVpZ2h0O1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBoZWFkZXJTbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyX3NsaWRlcicpO1xyXG4gICAgbGV0IGl0ZXJhdG9yID0gLTI7XHJcbiAgICBsZXQgdGltZXIxO1xyXG4gICAgc2V0VGltZW91dChzbGlkZXJNb3Rpb24sIDUwMDApO1xyXG4gICAgZnVuY3Rpb24gc2xpZGVyTW90aW9uKCkge1xyXG4gICAgICAgIGlmIChpdGVyYXRvcjwwKSB7aXRlcmF0b3IrK31cclxuICAgICAgICBlbHNlIHtpdGVyYXRvciA9IC0yfTtcclxuICAgICAgICBoZWFkZXJTbGlkZXIuc3R5bGUubGVmdCA9IGl0ZXJhdG9yKjEwMCsnJSc7XHJcbiAgICAgICAgdGltZXIxID0gc2V0VGltZW91dChzbGlkZXJNb3Rpb24sIDcwMDApO1xyXG4gICAgICAgIGJ0bnNbMF0uY2xhc3NMaXN0LnJlbW92ZSgnaXRJc0NoZWNrZWQnKTtcclxuICAgICAgICBidG5zWzFdLmNsYXNzTGlzdC5yZW1vdmUoJ2l0SXNDaGVja2VkJyk7XHJcbiAgICAgICAgYnRuc1syXS5jbGFzc0xpc3QucmVtb3ZlKCdpdElzQ2hlY2tlZCcpO1xyXG4gICAgICAgIGJ0bnNbaXRlcmF0b3IqLTFdLmNsYXNzTGlzdC5hZGQoJ2l0SXNDaGVja2VkJyk7XHJcbiAgICB9O1xyXG4gICAgbGV0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGFpbmVyX2NvbnRlbnRfaXRlbV9zbGlkZS1idG4nKTtcclxuICAgIGZvciAobGV0IGk9MDtpPDM7aSsrKXtcclxuICAgICAgICBidG5zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgaGVhZGVyU2xpZGVyLnN0eWxlLmxlZnQgPSAoMC1pKSAqIDEwMCArICclJztcclxuICAgICAgICAgICAgIGJ0bnNbMF0uY2xhc3NMaXN0LnJlbW92ZSgnaXRJc0NoZWNrZWQnKTtcclxuICAgICAgICAgICAgIGJ0bnNbMV0uY2xhc3NMaXN0LnJlbW92ZSgnaXRJc0NoZWNrZWQnKTtcclxuICAgICAgICAgICAgIGJ0bnNbMl0uY2xhc3NMaXN0LnJlbW92ZSgnaXRJc0NoZWNrZWQnKTtcclxuICAgICAgICAgICAgYnRuc1tpXS5jbGFzc0xpc3QuYWRkKCdpdElzQ2hlY2tlZCcpO1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIxKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChzbGlkZXJNb3Rpb24sIDkwMDApXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbn0pO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHRoaXNTbGlkZXJEb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbjFfc2xpZGVyLWRvdFwiKTtcclxuICAgIGZvciAobGV0IGk9MDsgaTwzO2krKyl7XHJcbiAgICAgICAgdGhpc1NsaWRlckRvdHNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBpbml0UG9zaXRpb249MC1pO1xyXG4gICAgICAgICAgICBzbGlkZXJNb3ZlbWVudCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBsZXQgbGVmdEFuZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbjFfc2xpZGVyLWJ0bi5sZWZ0LWFuZ2xlXCIpO1xyXG4gICAgbGV0IHJpZ2h0QW5nbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNuMV9zbGlkZXItYnRuLnJpZ2h0LWFuZ2xlXCIpO1xyXG4gICAgbGV0IHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc24xX3NsaWRlci13cmFwcGVyXCIpO1xyXG4gICAgbGV0IGluaXRQb3NpdGlvbiA9IDA7XHJcbiAgICByaWdodEFuZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbW92ZVNsaWRlck9wcG9zaXRlKTtcclxuICAgIGxlZnRBbmdsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1vdmVTbGlkZXIpO1xyXG4gICAgZnVuY3Rpb24gbW92ZVNsaWRlcigpe1xyXG4gICAgICAgIGlmIChpbml0UG9zaXRpb248MCl7XHJcbiAgICAgICAgICAgIGluaXRQb3NpdGlvbisrO1xyXG4gICAgICAgICAgICBzbGlkZXJNb3ZlbWVudCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG1vdmVTbGlkZXJPcHBvc2l0ZSgpIHtcclxuICAgICAgICBpZiAoaW5pdFBvc2l0aW9uID4gLTIpIHtcclxuICAgICAgICAgICAgaW5pdFBvc2l0aW9uLS07XHJcbiAgICAgICAgICAgIHNsaWRlck1vdmVtZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2xpZGVyTW92ZW1lbnQoKXtcclxuICAgICAgICBzbGlkZXIuc3R5bGUubGVmdD0oaW5pdFBvc2l0aW9uKjEwMCkrJyUnO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpcnN0ZGVzY3JpYmUnKTtcclxuICAgIGxldCBiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY29uZGRlc2NyaWJlJyk7XHJcbiAgICBsZXQgYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aGlyZGRlc2NyaWJlJyk7XHJcbiAgICBsZXQgYnRucyA9IFthLGIsY107XHJcbiAgICBsZXQgbWFya2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXRjaC1zZWFyY2gtbWFya2VyJyk7XHJcbiAgICBsZXQgcG9zaXRpb25zID0gWydmaXJzdFN0YXRlJywnc2Vjb25kU3RhdGUnLCd0aGlyZFN0YXRlJ107XHJcbiAgICBidG5zLmZvckVhY2goZnVuY3Rpb24oaXRlbSwgaWR4KXtcclxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgbWFya2VyLmNsYXNzTGlzdC5yZW1vdmUocG9zaXRpb25zWzBdLCBwb3NpdGlvbnNbMV0sIHBvc2l0aW9uc1syXSk7XHJcbiAgICAgICAgICAgIG1hcmtlci5jbGFzc0xpc3QuYWRkKHBvc2l0aW9uc1tpZHhdKTtcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufSk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgaDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHluYW1pY3R4dCcpO1xyXG4gICAgbGV0IHN0cmluZyA9ICdFTEJpXFx1MDBhMC1cXHUwMGEwTGVwc3phXFx1MDBhMHN0cm9uYVxcdTAwYTB0ZWNobmlraSEnXHJcbiAgICBoMS5pbm5lclRleHQ9Jyc7XHJcbiAgICBsZXQgaT0wO1xyXG4gICAgKGZ1bmN0aW9uIGFkZExldHRlcigpe1xyXG4gICAgaDEuaW5uZXJUZXh0PWgxLmlubmVyVGV4dCtzdHJpbmcuY2hhckF0KGkpO1xyXG4gICAgaSsrO1xyXG4gICAgICAgIGlmKGk8c3RyaW5nLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoYWRkTGV0dGVyLCA1MCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSkoKTtcclxufSk7IiwiaW1wb3J0IFwiLi92YXJzLnNjc3NcIjtcclxuaW1wb3J0IFwiLi9taXhlcy5zY3NzXCI7XHJcbmltcG9ydCBcIi4vZ2VuZXJhbHMuc2Nzc1wiO1xyXG5pbXBvcnQgXCIuL2EtaGVhZGVyLnNjc3NcIjtcclxuaW1wb3J0IFwiLi9iLWhlYWRlci5zY3NzXCI7XHJcblxyXG5pbXBvcnQgXCIuL2EtbmF2YmFyLmpzXCI7XHJcbmltcG9ydCBcIi4vYW5pbWF0aW9uLmpzXCI7XHJcblxyXG4ndXNlIHN0cmljdCc7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0TmF2QmFyKTtcclxuXHJcbmZ1bmN0aW9uIGluaXROYXZCYXIoKSB7XHJcbiAgICBpbml0U2VhcmNoQnRuKCk7XHJcbiAgICAvL2luaXRTY3JvbGxOYXZpKCk7XHJcbn1cclxuZnVuY3Rpb24gbmF2QmFySGVpZ2h0KCkge1xyXG4gICAgbGV0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGJpLW5hdiBuYXYnKS5vZmZzZXRIZWlnaHQ7XHJcbiAgICByZXR1cm4gbmF2O1xyXG59XHJcbmZ1bmN0aW9uIGluaXRTZWFyY2hCdG4oKSB7XHJcbiAgICBsZXQgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVsYmktbmF2X25hdl9pdGVtX3NlYXJjaCcpO1xyXG4gICAgc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGJpLW5hdl9uYXZfaXRlbSBpbnB1dCcpLmNsYXNzTGlzdC50b2dnbGUoJ2lzYWN0aXZlJyk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdFNjcm9sbE5hdmkoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBuYXZIID0gbmF2QmFySGVpZ2h0KCk7XHJcbiAgICAgICAgbGV0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGJpLW5hdiBuYXYnKTtcclxuICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID49IG5hdkgpIHtcclxuICAgICAgICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoJ2ZpeGVkJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2ZpeGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImNhbnZhcyIsInN0YWdlIiwiZXhwb3J0Um9vdCIsImFuaW1fY29udGFpbmVyIiwiZG9tX292ZXJsYXlfY29udGFpbmVyIiwiZm5TdGFydEFuaW1hdGlvbiIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbWJ1cmdlciIsInF1ZXJ5U2VsZWN0b3IiLCJtb2JpbGVtZW51IiwiaXRlcmF0b3IiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJmaXhlZG1lbnUiLCJmaXhlZG1lbnVDb250YWluZXIiLCJiYXJIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsInN0eWxlIiwiaGVpZ2h0IiwiaGVhZGVyU2xpZGVyIiwidGltZXIxIiwic2xpZGVyTW90aW9uIiwibGVmdCIsInNldFRpbWVvdXQiLCJidG5zIiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJ0aGlzU2xpZGVyRG90cyIsImxlZnRBbmdsZSIsInJpZ2h0QW5nbGUiLCJzbGlkZXIiLCJpbml0UG9zaXRpb24iLCJzbGlkZXJNb3ZlbWVudCIsIm1hcmtlciIsInBvc2l0aW9ucyIsImZvckVhY2giLCJpdGVtIiwiaWR4IiwiaDEiLCJzdHJpbmciLCJpbm5lclRleHQiLCJhZGRMZXR0ZXIiLCJjaGFyQXQiLCJsZW5ndGgiLCJnZXRFbGVtZW50QnlJZCIsImNvbXAiLCJBZG9iZUFuIiwiZ2V0Q29tcG9zaXRpb24iLCJnZXRMaWJyYXJ5IiwiZXZ0IiwibGliIiwiZ2V0U3ByaXRlU2hlZXQiLCJFbGJpaWx1c3RyYWNqYSIsIlN0YWdlIiwiYWRkQ2hpbGQiLCJUaWNrZXIiLCJzZXRGUFMiLCJwcm9wZXJ0aWVzIiwiZnBzIiwiaXNSZXNwIiwicmVzcERpbSIsImlzU2NhbGUiLCJzY2FsZVR5cGUiLCJsYXN0VyIsImxhc3RIIiwibGFzdFMiLCJyZXNpemVDYW52YXMiLCJ3Iiwid2lkdGgiLCJoIiwiaXciLCJpbm5lcldpZHRoIiwiaWgiLCJpbm5lckhlaWdodCIsInBSYXRpbyIsImRldmljZVBpeGVsUmF0aW8iLCJ4UmF0aW8iLCJ5UmF0aW8iLCJzUmF0aW8iLCJNYXRoIiwibWluIiwibWF4Iiwic2NhbGVYIiwic2NhbGVZIiwidGlja09uVXBkYXRlIiwidXBkYXRlIiwiY29tcG9zaXRpb25Mb2FkZWQiLCJpZCIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6InlCQUNBLElBQUlBLEVBQVFDLEVBQU9DLEVBQVlDLEVBQWdCQyxFQUF1QkMsRUNEdEVDLFNBQVNDLGlCQUFpQixtQkFBb0IsZUFDdENDLEVBQVlGLFNBQVNHLGNBQWMsd0JBQ25DQyxFQUFhSixTQUFTRyxjQUN0Qix3Q0FFQUUsRUFBVyxJQUNMSixpQkFBaUIsUUFBUyx1QkFLM0JJLEVBQ0FELEVBQVdFLFVBQVVDLE9BQU8sNEJBRGxCSCxFQUFXRSxVQUFVRSxJQUFJLDhCQUU3QkgsRUFBVyxFQUFJLFdBRzFCSSxFQUFZVCxTQUFTRyxjQUFjLG9CQUNuQ08sRUFBcUJWLFNBQVNHLGNBQWMsdUJBQ3pDRixpQkFBaUIsU0FBVSxlQUMxQlUsRUFXR0YsRUFBVUcsYUFWYkMsT0FBT0MsWUFBY0gsS0FDWEwsVUFBVUUsSUFBSSxnQkFDTE8sTUFBTUMsT0FBU1AsRUFBVUcsYUFBZSxTQUVqRE4sVUFBVUMsT0FBTyxnQkFDUlEsTUFBTUMsT0FBUyxRQVM5Q2hCLFNBQVNDLGlCQUFpQixtQkFBb0IsZUFDdENnQixFQUFlakIsU0FBU0csY0FBYyxxQkFDdENFLEdBQVksRUFDWmEsa0JBRUtDLElBQ0RkLEVBQVMsU0FDSyxJQUNMVSxNQUFNSyxL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
