//to use the scraper.
const { scrapePrices } = require("../utils/scraper");


const scrapingService = {
    getPrices: async () => {
      const prices = await scrapePrices();
      return prices;
    },
  };
  
  module.exports = scrapingService;