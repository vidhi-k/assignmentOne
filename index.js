const express = require("express");
const https = require("https");
const { parse } = require("path");
const { connected } = require("process");
require("dotenv").config();

const app = express();

// AIzaSyD3vU26eprZEy8b0Vce2gqAoDwN7ROmIrY
app.use(express.json());

app.get("/", function(req, res){
    const isbn = 0132145104;
    const url = "https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn + "&key=" + process.env.API; 

    https.get(url, function(response){
        console.log(response);
        response.on("data", function(data){
            // console.log(parse(data));
            const bookData = JSON.parse(data);   
            console.log(bookData);     
        });
    });

    res.send(res.statusCode);

});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});