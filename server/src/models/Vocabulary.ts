import { Sequelize, Model, DataTypes } from 'sequelize';
import Noun from './Noun';
import Verb from './Verb';
const sequelize = new Sequelize(
    `postgres://postgres:${process.env.DB_PASSWORD}@localhost:5432/german-app`
);

export default class Vocabulary extends Model {
    public id!: number;
}

Vocabulary.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }
},
    {
        tableName: 'vocabulary',
        sequelize,
        paranoid: true,
    }
)

Verb.belongsToMany(Noun, { through: 'Vocabulary', foreignKey: 'verb_id' });
Noun.belongsToMany(Verb, { through: 'Vocabulary', foreignKey: 'noun_id' })

sequelize
    .sync()
    .then(() => {
        console.log('vocabulary table created');
    })
    .catch((err) => console.log(err));

module.exports = Verb;