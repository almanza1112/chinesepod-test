const express = require("express");
const path = require("path");
const app = express();

app.get("/", async (req, res) => {
  res.send("Welcome to Chinespod API!");
});


//Uncomment below for local testing
app.listen(3000, () => console.log("Server Started"));