const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");

//configuration of the EJS template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Middleware for static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
const priceRoutes = require("./routes/priceRoutes");
app.use("/", priceRoutes);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });