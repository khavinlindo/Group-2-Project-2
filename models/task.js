module.exports = function (sequelize, DataTypes) {
    
    var Task = sequelize.define("Task", {
    task: DataTypes.STRING,
    urgency: DataTypes.STRING
    });

    return Task;
}