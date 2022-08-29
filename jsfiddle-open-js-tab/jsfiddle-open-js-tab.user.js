// ==UserScript==
// @name         JSFiddle: open in JavaScript tab
// @namespace    https://github.com/marcodallagatta/userscripts/raw/main/jsfiddle-open-js-tab
// @version      2022.08.28.12.16
// @description  Defaults to the JavaScript tab in JSFiddle. Tiny, but tiny savings compound!
// @author       Marco Dalla Gatta
// @updateURL    https://github.com/marcodallagatta/userscripts/raw/main/jsfiddle-open-js-tab/jsfiddle-open-js-tab.user.js
// @downloadURL  https://github.com/marcodallagatta/userscripts/raw/main/jsfiddle-open-js-tab/jsfiddle-open-js-tab.user.js
// @match        https://jsfiddle.net/*
// @icon         https://icons.duckduckgo.com/ip2/jsfiddle.net.ico
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  window.addEventListener("load", function () {

      const tabs = document.querySelectorAll("#tabs > ul > .tabItem");

      tabs.forEach((tab, index) => {
        if (index === 1) {
          tab.classList.add("active");
        } else {
          tab.classList.remove("active");
        }
      });

      const screens = document.querySelectorAll('.tabsContainer .tabCont');

      screens.forEach((screen, index) => {
        if (index !== 1) {
          screen.classList.add("hidden");
        } else {
          screen.classList.remove("hidden");
        }
      });

    }, false);

})();
