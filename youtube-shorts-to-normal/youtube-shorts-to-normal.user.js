// ==UserScript==
// @name         Youtube Shorts Custom Page to Normal Video Page
// @namespace    https://github.com/marcodallagatta/userscripts/raw/main/youtube-shorts-to-normal
// @version      2022.08.27.16.25
// @description  A simple redirect scripts to change the terrible shorts interface to the one for 'normal' videos
// @updateURL    https://github.com/marcodallagatta/userscripts/raw/main/youtube-shorts-to-normal/youtube-shorts-to-normal.user.js
// @downloadURL  https://github.com/marcodallagatta/userscripts/raw/main/youtube-shorts-to-normal/youtube-shorts-to-normal.user.js
// @author       Marco Dalla Gatta
// @license      MIT
// @match        https://www.youtube.com/*
// @icon         https://icons.duckduckgo.com/ip2/youtube.com.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    function redir() {
      if (window.location.toString().includes('/shorts/')) {
        window.location = window.location.toString().replace('shorts/', '/watch?v=')
      }
    }

    setInterval(function() {
      redir();
    }, 2500);
    
    redir();

})();
