// var db = require("../models/todo");

module.exports = function(app){
    app.get("/", function(req, res){
        res.render("index", {
            title: "To-do App",
            header: "To-Do"
        });
    });
}