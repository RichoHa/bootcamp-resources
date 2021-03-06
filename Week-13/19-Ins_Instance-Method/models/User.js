const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

function User() {
  this.numberOfPets = 0;
  // Return this; "this" is set a new empty object and return when we use *new* keyword
  //no return statement!
}

const user = new User(); //Get back a new empty object
user.laugh() //Define laugh on the prototye of "user"
//What is the prototype of user? user.__proto__===User.prototype{}
//How do I add "laugh" to the User.prototype object?

User.prototype.hasPets = function () {
  console.log(this.numberOfPets > 0)
}

user.hasPets();

console.log(user.__proto__);
console.log(user.constructor);
console.log(user instanceof User);

class User extends Model {
  // This instance method uses a conditional statement to check if a user has pets

  hasPets() {
    if (this.numberOfPets > 0) {
      return true;
    } else {
      return false;
    }
  }
}

// property on the User prototype, it's value is a function.

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
    numberOfPets: {
      type: DataTypes.INTEGER,
    },
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
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
