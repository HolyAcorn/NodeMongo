const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Welcome to my mongoAPI");
});

app.post("/blogpost", (req, res) => { 
    res.send("This is a post request");
});

mongoose.
connect("").
then(() => {
    console.log("connected to Mongo");
    
    app.listen(PORT, () => {
        console.log("listening to " + PORT);
    });
    
    });