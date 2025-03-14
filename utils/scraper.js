const puppeteer = require('puppeteer');
const data = require('../config/scrapingConfig');

(async () => {
    const browser = await puppeteer.launch({ headless: true }); 
    const page = await browser.newPage();


    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36');
    await page.setExtraHTTPHeaders({
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Referer': 'https://www.google.com',
        'DNT': '1',
        'Connection': 'keep-alive'
    });

    const scrapeSite = async (site) => {
        try {
            await page.goto(site.url, { waitUntil: 'networkidle2' });

            const products = await page.evaluate((selectors) => {
                const productElements = document.querySelectorAll(selectors.product);
                return Array.from(productElements).map(product => {
                    const name = product.querySelector(selectors.name)?.innerText.trim() || 'N/A';
                    const price = product.querySelector(selectors.price)?.innerText.trim() || 'N/A';
					const category = product.querySelector(selectors.category.sel)?.getAttribute(selectors.category.att) || 'N/A';
                    return { name, price, category };
                });
            }, site.selectors);

            console.log(`Scraped ${site.url}:`, products);
            return products;
        } catch (error) {
            console.error(`Error scraping ${site.url}:`, error.message);
        }
    };

    await Promise.all(data.sites.map(scrapeSite));

    await browser.close();
})();
