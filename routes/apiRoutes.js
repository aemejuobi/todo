var db = require("../models");

module.exports = function(app){
    // See all items to do (READ)
    app.get("/api/allLists", function(req, res){
        db.Todo.findAll({}).then(function(result){
            res.json(result);
        });
    });

    // Create list item
    app.post("/api/newTodo", function(req, res){
        console.log(db);
        db.Todo.create({
            text: req.body.text,
            completed: req.body.completed
        }).then(function(result){
            res.json(result);
        });
    });
};