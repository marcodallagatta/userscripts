// ==UserScript==
// @name         LeetCode discuss solution automatically filters JS
// @description  Easy-to-edit userscript to filter solution tab for Leetcode solutions. In the example it filters to Javascript
// @namespace    https://github.com/marcodallagatta/userscripts/raw/main/leetcode-filter-solutions
// @version      2022.09.02.20.15
// @author       Marco Dalla Gatta
// @updateURL    https://github.com/marcodallagatta/userscripts/raw/main/leetcode-filter-solutions/leetcode-filter-solutions.user.js
// @downloadURL  https://github.com/marcodallagatta/userscripts/raw/main/leetcode-filter-solutions/leetcode-filter-solutions.user.js
// @match        https://leetcode.com/problems/*/discuss/*
// @icon         https://icons.duckduckgo.com/ip2/leetcode.com.ico
// @license      MIT
// @grant        none
// ==/UserScript==

(function() {

    const filter = 'javascript';

    'use strict';
    if (!window.location.toString().includes('tag')) {
        window.location += `?currentPage=1&orderBy=most_votes&query=&tag=${filter}`
    }
})();
