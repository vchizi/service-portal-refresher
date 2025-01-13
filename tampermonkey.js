// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2024-05-16
// @description  try to take over the world!
// @author       You
// @match        https://service.berlin.de/terminvereinbarung/termin/taken/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=berlin.de
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let interval = setInterval(oneSecondFunction, 200);

    let audio = new Audio('https://cdn.uppbeat.io/audio-files/13a6d3c9e914de5ab3fb451786993718/612638641158d31a13d89a3e8cdb6090/17ea605ba88a670b067c6ac33860e6fe/STREAMING-alarm-danger-alert-rhythmic-beeping-smartsound-fx-1-00-30.mp3');

    function oneSecondFunction() {
        if (document.getElementsByClassName("calendar-table").length > 0) {
            clearInterval(interval)

            audio.play();
        }

        const calculatedSecs = document.getElementById("calculatedSecs");
        if (calculatedSecs.textContent == '00:00') {
            clearInterval(interval)
            //audio.play();

            document.querySelector("form[action='/terminvereinbarung/termin/restart/']").submit();
        }
    }
})();
