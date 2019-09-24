module.exports = function (sequelize, DataTypes) {
    
  var Grocery = sequelize.define("Grocery", {
    item: DataTypes.STRING,
    category: DataTypes.INTEGER,
    amount: DataTypes.INTEGER
  });

  // Grocery.associate = function(models) {
  //   Grocery.belongsToMany(Team, {
  //     through: 'users_teams',
  //     foreignKey: 'user_id',
  //     otherKey: 'team_id'
  //    });
  //    Team.belongsToMany(User, {
  //     through: 'users_teams',
  //     foreignKey: 'team_id',
  //     otherKey: 'user_id'
  //    });
  // }

  return Grocery;
}