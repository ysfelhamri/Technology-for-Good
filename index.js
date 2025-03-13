const express = require('express');
const priceRoutes = require('./routes/pricesRoutes');
const path = require('path');
const app = express();
const PORT = 3000;

// Configuration du moteur de template EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware pour les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', priceRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});