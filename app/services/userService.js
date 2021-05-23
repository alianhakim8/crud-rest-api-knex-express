const {
    getUserModel,
    showUserCustomerModel,
    showUserAdminModel,
    postUserModel,
    updateUserModel,
    deleteUserModel
} = require('../models/users/User');

// GET
const getUserService = async (req, res) => {
    let user_get = await getUserModel();
    return user_get;
}

const showUserService = async (id) => {
    let user_show = await showUserCustomerModel(id);
    return user_show;
}

const showUserAdminService = async (id) => {
    let user_show = await showUserAdminModel(id);
    return user_show;
}

// POST
const postUserService = async (name, email, password, email_verify, status) => {
    let user_post = await postUserModel(name, email, password, email_verify, status);
    return user_post;
}

// PUT
const updateUserService = async (name, email, password, email_verify, status, id) => {
    let user_update = await updateUserModel(name, email, password, email_verify, status, id);
    return user_update;
}

// DELETE
const deleteUserService = async (id) => {
    let user_delete = await deleteUserModel(id);
    return user_delete;
}

module.exports = {
    getUserService,
    showUserService,
    showUserAdminService,
    postUserService,
    updateUserService,
    deleteUserService
}