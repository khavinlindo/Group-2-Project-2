
module.exports = function(sequelize, DataTypes) {
  var Grocery = sequelize.define("grocery", {
    item: DataTypes.STRING,
    catagory: DataTypes.STRING
  });
  return Grocery;
};
