
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 8080;

// Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route Traffic
require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

// Server Start
app.listen(PORT, function() {
  console.log("App listening on localhost:" + PORT);
});
