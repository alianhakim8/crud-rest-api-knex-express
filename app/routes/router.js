const express = require('express');
require('express-group-routes');

const userController = require('../controllers/UserController');

const router = express.Router();

router.group('/v1', (router) => {

    // Users
    router.group('/users', (router) => {
        router.get('/', userController.getUser);
        router.post('/', userController.store);
        router.put('/:id', userController.update);
        router.delete('/:id', userController.destroy);
        // Customer
        router.group('/customer', (router) => {
            router.get('/show/:id', userController.show);
        });
        // Admin
        router.group('/admin', (router) => {
            router.get('/show/:id', userController.showAdmin);
        });
    });
});

module.exports = router;