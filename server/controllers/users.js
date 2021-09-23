const sequelize = require('../db');

function getUsers(request, response) {
    const users = await sequelize.models.users.findAndCountAll();
    return res.status(200).json({ message: 'Users:', data: users });
}

function createUser(request, response) {
    const { body } = req;

    let user = await sequelize.models.users.findOne({ where: {
        email: body.email
    }});

    const user = await sequelize.models.users.create({
        name: body.name,
        lastname: body.lastname,
        type: body.type,
        email: body.email,
        password: body.password
    });
    await user.save();
    return res.status(200).json({ message: 'New user', data: user});
};

function updateUser(request, response) {
    const {body, params: {id} } = req;
    const user = await sequelize.models.users.findByPk(id);

    const user = await user.update({
        name: body.name,
        lastname: body.lastname,
        type: body.type,
        email: body.email,
        password: body.password
    });
    return res.json({ message: 'Update user', data: user});
};

function deleteUser(request, response) {
    const {params: {id}} = req;
    const user = await sequelize.models.users.findByPk(id);


    await user.destroy();
    return res.status(200).json({message: 'Delete user', data: user});
};

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
}