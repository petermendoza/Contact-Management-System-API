// Creating basic express server
// Requiring express 
const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
// Uses the .env file
const dotenv = require("dotenv").config()

connectDb();
// App for express
const app = express();

// Accesses port from .env file
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler)

app.listen(port, () => {
    console.log(`server running on port ${port}`);   
});