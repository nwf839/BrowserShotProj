/*jshint esversion: 6 */

const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    let wait = ms => new Promise(resolve => setTimeout(resolve, ms));

    await page.emulate(devices['iPhone 6']);
    await page.goto('https://www.gamespot.com', {"waitUntil" : "networkidle", "networkIdleTimeout" : 3000});
    await page.screenshot({ path: 'screenshots/gamespot-mob.png', fullPage: true});
    await wait(15000);
    await page.screenshot({ path: 'screenshots/gamespot-mob2.png', fullPage: true});
    await browser.close();
})();

