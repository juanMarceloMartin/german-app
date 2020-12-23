import { Sequelize, Model, DataTypes } from 'sequelize';
const Noun = require('./Noun');
const sequelize = new Sequelize(
  `postgres://postgres:${process.env.DB_PASSWORD}@localhost:5432/german-app`
);

export default class Verb extends Model {
  public id!: number;
  public verb!: string;
  public auxiliary!: string;
  public participle!: string;
  public translation!: string;
  public level!: string;
  public createdAt!: Date;
  public updatedAt!: Date | null;
  public deletedAt!: Date | null;
}

Verb.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    verb: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
    auxiliary: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
    participle: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
    translation: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
    niveau: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
    level: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
    createdAt: {
      type: new DataTypes.DATE(),
      allowNull: false,
    },
    updatedAt: {
      type: new DataTypes.DATE(),
    },
    deletedAt: {
      type: new DataTypes.DATE(),
    },
  },
  {
    tableName: 'verbs',
    sequelize,
    paranoid: true,
  }
);

sequelize
  .sync()
  .then(() => {
    console.log('verbs table created');
  })
  .catch((err) => console.log(err));

module.exports = Verb;
