// ==UserScript==
// @name         Time Spent on Youtube
// @version      2022.09.26.15.48
// @description  A simple timer that shows how much time you spent on Youtube today. Visit the GitHub repo for more info: https://github.com/marcodallagatta/userscripts/raw/main/time-spent-on-youtube/
// @license      MIT
// @author       Marco Dalla Gatta
// @namespace    https://github.com/marcodallagatta/userscripts/raw/main/time-spent-on-youtube/
// @updateURL    https://github.com/marcodallagatta/userscripts/raw/main/time-spent-on-youtube/time-spent-on-youtube.user.js
// @downloadURL  https://github.com/marcodallagatta/userscripts/raw/main/time-spent-on-youtube/time-spent-on-youtube.user.js
// @match        https://www.youtube.com/*
// @icon         https://icons.duckduckgo.com/ip2/youtube.com.ico
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  const background = false; // 'true' also counts when YT is in a background tab, 'false' only counts active tab
  const showInTitle = true; // 'true' prepend the minutes before the title in the tab
  const originalTitle = document.title;
  const resetTime = 4; // time when the timer resets, 24h time (0 = midnight, 4 = 4AM, 15 = 3PM)

  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  const todayYYMMDD = yyyy + mm + dd;
  const hours = today.getHours();


  let spent = 0;

  if (localStorage.getItem("date") !== todayYYMMDD && localStorage.getItem("hours") >= resetTime) {
    localStorage.setItem("date", todayYYMMDD);
    localStorage.setItem("hours", hours);
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
    const mm = (Math.trunc(time) % 60).toString();
    if (time > 60) {
      const hh = Math.trunc(time / 60).toString();
      elem.innerText = `${hh}h ${mm}m`;
      if (showInTitle) document.title = `${hh}h${mm.padStart(2, "0")}m ${originalTitle}`;
    } else {
      elem.innerText = `${mm}m`;
      if (showInTitle) document.title = `${mm.padStart(2, "0")}m ${originalTitle}`;
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
