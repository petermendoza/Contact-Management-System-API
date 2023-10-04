// Creating basic express server
// Requiring express 
const express = require("express");
// Uses the .env file
const dotenv = require("dotenv").config()

// App for express
const app = express();

// Accesses port from .env file
const port = process.env.PORT || 5000;

app.use("/api/contacts", require("./routes/contactRoutes"));

app.listen(port, () => {
    console.log(`server running on port ${port}`);   
});