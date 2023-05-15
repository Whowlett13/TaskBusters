const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Jobs extends Model {}

Jobs.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      job_poster_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'job_poster',
          key: 'id'
        }
      },
      job_seeker_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'job_seeker',
          key: 'id'
        }
      },
      job_title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
      },
      job_description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
      },
      job_location: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
      },
      job_date: {
        type: DataTypes.DATE,
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
    modelName: 'Jobs'
  }
);

module.exports = Jobs;
