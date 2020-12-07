"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize(`postgres://postgres:${process.env.DB_PASSWORD}@localhost:5432/german-app`);
class Verb extends sequelize_1.Model {
}
exports.default = Verb;
Verb.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    verb: {
        type: new sequelize_1.DataTypes.STRING(),
        allowNull: false,
    },
    auxiliary: {
        type: new sequelize_1.DataTypes.STRING(),
        allowNull: false,
    },
    participle: {
        type: new sequelize_1.DataTypes.STRING(),
        allowNull: false,
    },
    translation: {
        type: new sequelize_1.DataTypes.STRING(),
        allowNull: false,
    },
    level: {
        type: new sequelize_1.DataTypes.STRING(),
        allowNull: false,
    },
    createdAt: {
        type: new sequelize_1.DataTypes.DATE(),
        allowNull: false,
    },
    updatedAt: {
        type: new sequelize_1.DataTypes.DATE(),
    },
    deletedAt: {
        type: new sequelize_1.DataTypes.DATE(),
    },
}, {
    tableName: 'verbs',
    sequelize,
    paranoid: true,
});
sequelize
    .sync()
    .then(() => {
    console.log('verbs table created');
})
    .catch((err) => console.log(err));
module.exports = Verb;
