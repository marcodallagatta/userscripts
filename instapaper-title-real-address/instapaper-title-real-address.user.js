// ==UserScript==
// @name         Instapaper title links to real address
// @namespace    https://github.com/marcodallagatta/userscripts/tree/main/instapaper-title-real-address
// @version      1.1
// @description  Instead of linking to Instapaper's "Reading Mode", this will use the real address' link for the title url
// @updateURL    https://github.com/marcodallagatta/userscripts/tree/main/instapaper-title-real-address/instapaper-title-real-address.user.js
// @downloadURL  https://github.com/marcodallagatta/userscripts/tree/main/instapaper-title-real-address/instapaper-title-real-address.user.js
// @author       You
// @match        https://www.instapaper.com/u/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=instapaper.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const articles = document.querySelectorAll('article');

    articles.forEach(art => {
        const url = art.querySelector('.js_bookmark_edit').dataset.url;
        const titleUrl = art.querySelector('.article_title');
        titleUrl.href = url;
        titleUrl.setAttribute('target', '_blank')
    })
})();
