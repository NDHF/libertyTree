// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// var config = {
//   apiKey: "AIzaSyD68rbaMHr4XzUKdGfHbgjT6u1JMygEilw",
//   authDomain: "harmonize-dd029.firebaseapp.com",
//   databaseURL: "https://harmonize-dd029.firebaseio.com",
//   projectId: "harmonize-dd029",
//   storageBucket: "harmonize-dd029.appspot.com",
//   messagingSenderId: "419798913580"
// };
// var firebase = require('firebase');
// firebase.initializeApp(config);

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
