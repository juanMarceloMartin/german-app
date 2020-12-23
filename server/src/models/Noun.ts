import { Sequelize, Model, DataTypes } from 'sequelize';
const sequelize = new Sequelize(
  `postgres://postgres:${process.env.DB_PASSWORD}@localhost:5432/german-app`
);

export default class Noun extends Model {
  public id!: number;
  public noun!: string;
  public article!: string;
  public plural!: string;
  public translation!: string;
  public level!: string;
  public createdAt!: Date;
  public updatedAt!: Date | null;
  public deletedAt!: Date | null;
}

Noun.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    noun: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
    article: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
    plural: {
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
    }
  },
  {
    tableName: 'nouns',
    sequelize,
    paranoid: true,
  }
);

sequelize
  .sync()
  .then(() => {
    console.log('nouns table created');
  })
  .catch((err) => console.log(err));

module.exports = Noun;
