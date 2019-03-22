module.exports = function(sequelize, DataTypes){
    var Todo = sequelize.define("todo", {
        text: DataTypes.STRING,
        completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return Todo;
};