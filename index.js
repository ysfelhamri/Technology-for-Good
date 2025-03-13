const express = require("express");
const app = express();
const PORT = 3000;


app.get("/",(req, res)=>{
    res.send("Page index");
});

app.listen(PORT,()=>{
    console.log('run server at port ', PORT);
})