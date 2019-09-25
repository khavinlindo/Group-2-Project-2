module.exports = function (sequelize, DataTypes) {
    
  var Grocery = sequelize.define("Grocery", {
    item: DataTypes.STRING,
    category: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    date: DataTypes.STRING
  });

  return Grocery;
}