var express = require("express");
var bodyParser = require("body-parser");

var db = require("./models");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(bodyParser());

app.use(express.static("public"));


var expHbs = require("express-handlebars");

app.engine("handlebars", expHbs({defaultLayout: "main"}));

app.set("view engine", "handlebars");

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

db.sequelize.sync().then( ()=> {
	app.listen(PORT, ()=> {
		console.log("App Listening to port: "+ PORT);
	})
})