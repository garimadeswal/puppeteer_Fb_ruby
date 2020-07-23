const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        slowMo: 20,
        args: ['--start-maximized', '--disable-notifications', '--incognito']
    });
    const page = await browser.newPage();
    //await page.goto('https://www.google.co.in/');

    await page.goto('https://www.facebook.com', {
        waitUntil: 'networkidle2'
    });
    await page.waitForSelector('#email', {
        visible: true
    });

    await page.type('#email', 'sopiben984@gotkmail.com');
    await page.type('#pass', "Deepak@123");
    await page.click("#loginbutton");
    await page.waitForSelector('div._4bl9._42n- textarea', {
        visible: true
    });
    await page.type('div._4bl9._42n- textarea',"hello");

    const element = await select(page).getElement('button:contains(Post)');
    await element.click();
    // await page.click('div.button.type=submit')
    await page.click('Post', '._45wg._69yt');
    
  //await page.screenshot({path: 'example.png'});

 // await browser.close();
})();