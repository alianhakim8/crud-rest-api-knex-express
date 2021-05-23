const {
    getUserService,
    showUserService,
    showUserAdminService,
    postUserService,
    updateUserService,
    deleteUserService
} = require('../services/userService');

// GET
const getUser = async (req, res) => {
    let users = await getUserService();
    res.json(users);
}

const show = async (req, res, next) => {
    let getId = parseInt(req.params.id);

    try {
        let users = await showUserService(getId);

        res.json({
            data: users
        });
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

const showAdmin = async (req, res, next) => {
    let getId = parseInt(req.params.id);

    try {
        let users = await showUserAdminService(getId);

        res.json({
            data: users
        });
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}


// POST
const store = async (req, res) => {
    const {
        name, email, password, email_verify, status
    } = req.body;

    try {
        let users = await postUserService(
            name, email, password, email_verify, status
        );
        res.json(users);

    } catch (error) {
        res.json(error.message);
    }
}

// PUT
const update = async (req, res) => {
    const {
        name, email, password, email_verify, status
    } = req.body;

    try {
        let users = await updateUserService(
            name,
            email,
            password,
            email_verify,
            status,
            req.params.id
        );
        res.json({
            message: 'Update Berhasil'
        });
    } catch (error) {
        res.json(error.message);
    }
}

// DELETE
const destroy = async (req, res, next) => {
    try {
        let users = await deleteUserService(req.params.id);
        res.json({
            message: 'Delete Succesful',
            data: users,
            code: 200
        });
    } catch (error) {
        res.json({
            message: 'Error',
            data: error.message,
            code: 500,
        })
    }
}
module.exports = {
    getUser,
    show,
    showAdmin,
    store,
    update,
    destroy
}