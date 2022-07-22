// ==UserScript==
// @name         Time Spent on Youtube
// @version      2022.07.22.21.47
// @description  A simple timer that shows how much time you spent on Youtube today (resets at midnight)
// @license      MIT
// @author       Marco Dalla Gatta
// @namespace    https://github.com/marcodallagatta/userscript-time-spent-youtube
// @updateURL    https://raw.githubusercontent.com/marcodallagatta/userscript-time-spent-youtube/main/time-spent-on-youtube.user.js
// @downloadURL  https://raw.githubusercontent.com/marcodallagatta/userscript-time-spent-youtube/main/time-spent-on-youtube.user.js
// @match        https://www.youtube.com/*
// @icon         https://icons.duckduckgo.com/ip2/youtube.com.ico
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  const background = false; // 'true' also counts when YT is in a background tab, 'false' only counts active tab

  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  const todayYYMMDD = yyyy + mm + dd;

  let spent = 0;

  if (localStorage.getItem("date") !== todayYYMMDD) {
    localStorage.setItem("date", todayYYMMDD);
    localStorage.setItem("spent", 0);
  } else {
    spent = parseFloat(localStorage.getItem("spent"));
  }

  const inDOM = document.getElementById("start");
  let elem = document.createElement("span");
  elem.style = "color:white;font-size:2rem";
  inDOM.appendChild(elem);
  showAlert(spent);

  function showAlert(time) {
    if (time > 60) {
      elem.innerText = `${Math.trunc(time / 60).toString()}h ${(
        Math.trunc(time) % 60
      ).toString()}m`;
    } else {
      elem.innerText = `${Math.trunc(time).toString()}m`;
    }
  }

  setInterval(function () {
    if (background || document.hasFocus()) {
      spent = parseFloat(localStorage.getItem("spent")) + 0.25;
      localStorage.setItem("spent", spent);
      showAlert(spent);
    }
  }, 15000); // 15s
})();
