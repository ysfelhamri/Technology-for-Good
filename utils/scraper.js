//to implement the scraping logic.
const axios = require("axios");
const cheerio = require("cheerio");
const scrapingConfig = require("../config/scrapingConfig");



const scrapePrices = async () => {
    const prices = [];

    for(const site of scrapingConfig.sites){
        try{
            const response = await axios.get(setImmediate.url);
            const $ = cheerio.load(response.data);

            $(site.selectors.products).each((index, element)=>{
                const product = $(element).text().trim();
                const price = $(element).siblings(site.selectors.price).text().trim()
                const category = $(element).siblings(site.selectors.category).text().trim();

                prices.push({
                    site: site.name,
                    product,
                    price,
                    category,
                });
            });
        }catch(error){
            console.error(`Error scraping ${site.name}:`, error.message)
        }
    };
    return prices;
};

module.exports = {scrapePrices}