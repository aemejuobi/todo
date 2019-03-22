require("dotenv").config();
var express = require("express");
var exhb = require("express-handlebars");

var path = require("path");
var db = require("./models");

var port = process.env.PORT || 8080;
var app = express();

var apiRoutes = require("./routes/apiRoutes");
var htmlRoutes = require("./routes/htmlRoutes");

// Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Handlebars
app.engine("handlebars", exhb({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Routes
apiRoutes(app);
htmlRoutes(app);

// Run server
db.sequelize.sync().then(function(){
    app.listen(port, function(){
        console.log(`Listening on port ${port}`);
    });
});
