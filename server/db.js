const { Sequelize } = require('sequelize');

const Category = require('./models/Category');
const Provider = require('./models/Product');
const User = require('./models/User');

const sequelize = new Sequelize('defiesta-api', 'root', 'root', {
    host: 'localhost',
    dialect: 'mariadb',
    logging: false,
});

const models = [
    Category,
    Provider,
    User
];

// Registering models into sequelize
for (let model of models) {
    model(sequelize)
}

// Configuration relations
const { categories, providers, users} = sequelize.models;
providers.belongsTo('categories');


module,exports = sequelize;