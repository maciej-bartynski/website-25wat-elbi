/*Author: Maciej Bartyński*/

//IExplorer supported;
/** browser.wid.min, browser.wid.max - for window width without
scrollbar or with scrollbar **/
/** browser.hei.min, browser.hei.max - for window height without
scrollbar or with scrollbar **/
'use strict';
export const browser = {
    wid: {
        min() {
            return Math.min(
                window.innerWidth,
                document.body.scrollWidth,
                document.documentElement.scrollWidth,
                document.body.offsetWidth,
                document.documentElement.offsetWidth,
                document.body.clientWidth,
                document.documentElement.clientWidth
            );
        },
        max() {
            return Math.max(
                window.innerWidth,
                document.body.scrollWidth,
                document.documentElement.scrollWidth,
                document.body.offsetWidth,
                document.documentElement.offsetWidth,
                document.body.clientWidth,
                document.documentElement.clientWidth
            );
        }
    },
    hei: {
        min() {
            return Math.min(
                window.innerHeight,
                document.body.scrollHeight,
                document.documentElement.scrollHeight,
                document.body.offsetHeight,
                document.documentElement.offsetHeight,
                document.body.clientHeight,
                document.documentElement.clientHeight
            );
        },
        max() {
            return Math.max(
                window.innerHeight,
                document.body.scrollHeight,
                document.documentElement.scrollHeight,
                document.body.offsetHeight,
                document.documentElement.offsetHeight,
                document.body.clientHeight,
                document.documentElement.clientHeight
            );
        }
    }
};