module.exports = function (sequelize, DataTypes) {
    
  var Grocery = sequelize.define("Grocery", {
    item: DataTypes.STRING,
    catagory: DataTypes.STRING,
    amount: DataTypes.INTEGER
  });

  return Grocery;
}