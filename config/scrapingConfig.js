module.exports = {
  sites: [
    {
      name: "Jumia",
      url: "https://www.jumia.ma/epicerie-alimentaire",
      selectors: {
        product: "article.prd",
        name: ".name",
        price: ".prc",
        category: {
          sel: "a.core",
          att: "data-ga4-item_category4",
        },
      },
    },
    // Ajoutez d'autres sites ici
  ],
};