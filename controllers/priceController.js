const { scrapePrices } = require('../services/scrapingService');

const priceController = {
  getPrices: async (req, res) => {
    try {
      const prices = await scrapePrices();
      console.log('Prices:', prices);
      res.render('prices', { prices });
    } catch (error) {
      console.error('Error in getPrices:', error.message);
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = priceController;