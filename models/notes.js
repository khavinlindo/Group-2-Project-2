module.exports = function (sequelize, DataTypes) {
    
    var Notes = sequelize.define("Notes", {
        note: DataTypes.STRING,
        author: DataTypes.STRING
    });
    
    return Notes;
}
