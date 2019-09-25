module.exports = function (sequelize, DataTypes) {
    
    var Task = sequelize.define("Task", {
        task: DataTypes.STRING,
        urgency: DataTypes.STRING,
        date: DataTypes.STRING
    });

    return Task;
}