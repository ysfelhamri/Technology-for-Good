const { name } = require("ejs");

//to store the URLs and CSS selectors of sites to be scrapped.
module.exports = {
    sites : {
        name : "ASwak salame",
        url : "https://aswakassalam.com/",
        selectors: {
            product : ".product_name",
            price : ".price",
            category: " .category"
        },
    }
};