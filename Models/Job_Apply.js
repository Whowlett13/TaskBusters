const { Model, DataTypes } = require('sequelize');
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
      job_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Jobs',
          key: 'id'
        }
      },
      job_seeker_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Job_Seeker',
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
