const {DataTypes, Sequelize} = require('sequelize');


module.exports = (sequelize) => sequelize.define('providers', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    categoryId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'products',
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
})