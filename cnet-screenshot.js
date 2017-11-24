/*jshint esversion: 6 */

const puppeteer = require('puppeteer');

(async () => {
    var i = 0;
    var bottom = false;
    var screenLeft = 0;
    var scrollByAmt = 1000;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    let wait = ms => new Promise(resolve => setTimeout(resolve, ms));

    await page.goto('https://www.cnet.com', {"waitUntil" : "networkidle", "networkIdleTimeout" : 3000});
    const bodyHandle = await page.$('body');
    const height = await page.evaluate(body => body.clientHeight, bodyHandle);
    screenLeft = height;
    await bodyHandle.dispose;
    await page.setViewport({
        width: 1440,
        height: 15000
    });
    await wait(15000);
    await page.setViewport({
        width: 1440,
        height: 1440
    });
    while (bottom === false) {
        i = await i + 1;
        screenLeft = await screenLeft - 1000;
        if (screenLeft < 1000) {
            scrollByAmt = screenLeft;
            bottom = true;
        }
        await page.evaluate(_ => {
            window.scrollBy(0,1000);
        });
        await page.screenshot({ path: 'screenshots/cnet' + i.toString() + '.png'/*, fullPage: true*/});
    }
    await browser.close();
})();

