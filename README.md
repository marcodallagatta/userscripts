# Time Spent on YouTube Userscript

A friend asked me to make a simple userscript to show how long she spends on YouTube every day.
I decided to publish it here since it could easily be adapted to other websites without changing the logic.

The script refreshes every 15 seconds only when the YouTube tab is actually active. To make it count time even in background just change the `background` variable to `true`.

## Installation

1. Make sure you have an extension that supports userscripts:

   - Firefox - install [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/).
   - Chrome - install [Tampermonkey](https://tampermonkey.net/?ext=dhdg&browser=chrome).
   - Edge - install [Tampermonkey](https://www.tampermonkey.net/?ext=dhdg&browser=edge).
   - Opera - install [Tampermonkey](https://tampermonkey.net/?ext=dhdg&browser=opera) or [Violent Monkey](https://addons.opera.com/en/extensions/details/violent-monkey/).
   - Safari - install [Tampermonkey](https://tampermonkey.net/?ext=dhdg&browser=safari).
   - Dolphin - install [Tampermonkey](https://tampermonkey.net/?ext=dhdg&browser=dolphin).
   - UC Browser - install [Tampermonkey](https://tampermonkey.net/?ext=dhdg&browser=ucweb).

2. Install by clicking on the following link: [time-spent-on-youtube](https://tampermonkey.net/?ext=dhdg&browser=ucweb)

## Updating

Userscripts are set up to automatically update. You can check for updates from within the Greasemonkey or Tampermonkey menu, or click on the install link again to get the update.

## Issues

Please report any userscript issues within this repository's [issue section](https://github.com/marcodallagatta/userscript-time-spent-youtube/issues).
