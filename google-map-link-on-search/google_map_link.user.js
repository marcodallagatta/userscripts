// ==UserScript==
// @name         Add Google Maps Link on Google Search
// @version      0.1
// @description  Add a link to an image, with the URL of the value of a textarea searched in Google Maps
// @author       You
// @match        https://www.google.com/search*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Wait for the DOM to be fully loaded
    window.addEventListener('load', function() {
        // Get the textarea and image elements
        var textarea = document.querySelector('textarea[role="combobox"]');
        var img = document.getElementById('lu_map');

        // Check if the elements exist
        if (textarea && img) {
            // Create a link element
            var link = document.createElement('a');

            // Set the link's href to the Google Maps search URL with the textarea's value
            link.href = 'https://www.google.com/maps/search/' + encodeURIComponent(textarea.value);

            // Set the link's target to '_blank' to open in a new tab
            // link.target = '_blank';

            // Wrap the image with the link
            img.parentNode.insertBefore(link, img);
            link.appendChild(img);
        }
    }, false);
})();
