const sequelize = require('../db');

function getProviders(request, response) {
    const providers = await sequelize.models.providers.findAndCountAll();
    return res.status(200).json({ message: 'providers:', data: providers });
}

function createProvider(request, response) {
    const { body } = req;

    let provider = await sequelize.models.providers.findOne({ where: {
        email: body.email
    }});

    const provider = await sequelize.models.providers.create({
        name: body.name,
        lastname: body.lastname,
        type: body.type,
        email: body.email,
        password: body.password
    });

    await provider.save();
    
    return res.status(200).json({ message: 'New provider', data: provider});
};

function updateProvider(request, response) {
    const {body, params: {id} } = req;
    const provider = await sequelize.models.providers.findByPk(id);

    const provider = await provider.update({
        name: body.name,
        lastname: body.lastname,
        type: body.type,
        email: body.email,
        password: body.password
    });
    return res.json({ message: 'Update provider', data: provider});
};

function deleteProvider(request, response) {
    const {params: {id}} = req;
    const provider = await sequelize.models.providers.findByPk(id);


    await provider.destroy();
    return res.status(200).json({message: 'Delete provider', data: provider});
};

module.exports = {
    getProviders,
    createProvider,
    updateProvider,
    deleteProvider
}