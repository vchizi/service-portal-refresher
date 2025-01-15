// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2025-01-15
// @description  try to take over the world!
// @author       You
// @match        https://service.berlin.de/dienstleistung/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Your code here...
        const labelsToCheck = [
            "Bürgeramt 1 (Kreuzberg), Yorckstraße",
            "Bürgeramt 3 (Friedrichshain), Frankfurter Allee",
            "Bürgeramt Rathaus Mitte",
            "Bürgeramt Rathaus Tiergarten",
            "Bürgeramt Wedding",
            "Bürgeramt Klosterstraße",
            "Bürgeramt Wedding - Personaldokumente nach Einbürgerung (LEA)",
            "Bürgeramt Prenzlauer Berg",
            "Bürgeramt Schöneberg",
            "Bürgeramt Tempelhof",
        ];

        labelsToCheck.forEach(labelText => {
            // Find the label element by its text content
            const label = Array.from(document.querySelectorAll('label.form-check-label')).find(label => label.textContent.trim() === labelText);

            if (label) {
                // Find the associated checkbox input
                const checkbox = document.getElementById(label.getAttribute('for'));

                // Simulate a click on the checkbox if it exists
                if (checkbox) {
                    checkbox.click();
                }
            }
        });
    });
})();
