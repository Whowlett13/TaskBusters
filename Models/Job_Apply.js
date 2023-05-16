const { Model, DataTypes } = require('sequelize');
const { Job_Apply } = require('.');
const sequelize = require('../config/connection');

class Job_Apply extends Model {}

Job_Apply.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id'
        }
      },
      job_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Jobs',
          key: 'id'
        }
      },
      comment_text: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
      }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Job_Apply'
  }
);

module.exports = Job_Apply;
