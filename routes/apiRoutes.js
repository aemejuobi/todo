var db = require("../models");

module.exports = function(app){

    // Create list item
    app.post("/api/todo", function(req, res){
        db.Todo.create({
            text: req.body.text,
            completed: req.body.completed
        }).then(function(result){
            res.json(result);
        });
    });


    // See all items to do (READ)
    app.get("/api/todo", function(req, res){
        db.Todo.findAll({}).then(function(result){
            res.json(result);
        });
    });


    // Update item in todo list
    app.put("/api/todo/:id", function(req, res){
        db.Todo.update(req.body, {
            where: {
                id: req.params.id
            }
        }).then(function(result){
            res.json(result);
        });
    });


    // Delete an item in todo list
    app.delete("/api/todo/:id", function(req, res){
        db.Todo.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(result){
            res.json(result);
        });
    });

};