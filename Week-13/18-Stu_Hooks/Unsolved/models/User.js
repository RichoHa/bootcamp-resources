const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model { }

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {

    // When adding hooks via the init() method, they go below
    hooks: {
      // Use the beforeCreate hook to work with data before a new instance is created
      beforeCreate: async (User) => {
        const salt = 10;
        // In this case, we are taking the user's email address, and making all letters lower case before adding it to the database.
        User.password = await bcrypt.genSalt(10, function (err, salt) {
          bcrypt.hash(User.password, salt, function (err, hash) {
            User.password = hash;
            console.log(`User.password ${User.password} is equal to ${hash}`)
          });
        });;
        return User;
      },
      // Here, we use the beforeUpdate hook to make all of the characters lower case in an updated email address, before updating the database.
      beforeUpdate: async (User) => {
        User.password = await User.password.hash;
        return User;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
