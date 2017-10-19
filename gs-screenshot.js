/*jshint esversion: 6 */

const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://www.gamespot.com', {"waitUntil" : "networkidle", "networkIdleTimeout" : 3000});
    await page.screenshot({ path: 'screenshots/gamespot.png', fullPage: true});
    await browser.close();
})();

