const express = require('express');
const mongoose = require("mongoose");
const webRouter = require('./routes/web');
const apiRouter = require('./routes/api');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(webRouter);
app.use(apiRouter);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});