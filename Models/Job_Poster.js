const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Job_Poster records the details about the person who posts the job
class Job_Poster extends Model {}

Job_Poster.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      // define a username column
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      // define a password column
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [4]
        }
      },
      // define an email column
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      last_name: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      contact_number: {
        type: DataTypes.NUMBER,
        allowNull: false
      }
    },
    {
        hooks: {
          // set up beforeCreate lifecycle "hook" functionality
          async beforeCreate(newUserData) {
              newUserData.password = await bcrypt.hash(newUserData.password, 10);
              return newUserData;
          },
            // set up beforeUpdate lifecycle "hook" functionality
          async beforeUpdate(updatedUserData) {
              updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
              return updatedUserData;
          }
        },

      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'Job_Poster'
    }
  );

  module.exports = Job_Poster;
