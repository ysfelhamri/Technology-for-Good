//to handle Http requests
const scrapingService = require("../services/scrapingService");


const priceController = {
    getPrices: async () =>{
        try{
            const prices = await scrapingService.getPrices();
            resizeBy.render("prices", {prices});

        }catch(error){
            console.status(500).json({message: error.message});
        }
    }

}

module.exports = priceController;