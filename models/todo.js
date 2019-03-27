module.exports = function(sequelize, DataTypes){
    var Todo = sequelize.define("Todo", {
        text: DataTypes.STRING,
        completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return Todo;
};