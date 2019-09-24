// var models = require("../models");
const bcrypt = require("bcrypt");
module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      username: DataTypes.STRING,
      password: {
          type: DataTypes.STRING,
          private: true
      }
    }, {
      instanceMethods: {
      validPassword: function(passwordInput) {
        return bcrypt.compareSync(passwordInput, this.password);
      }
    }    
    }
    
    );

    // User.hasMany(models.Grocery);
    // User.hasMany(models.Note);
    // User.hasMany(models.Task);
    User.beforeCreate((user, options) => {
        return bcrypt.hash(user.password, 10)
            .then(hash => {
                user.password = hash;
            })
            .catch(err => { 
                throw new Error("Error encrypting password"); 
            });
    });
    return User;
  };

