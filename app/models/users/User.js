const { Model } = require('objection');

const knex = require('../../config/db/knex');

Model.knex(knex);

class User extends Model {

    static get tableName() {
        return 'users';
    }

    // relational anothertable
    static get relationMappings() {
        const Customer = require('./Customer');
        const Admin = require('./Admin');

        return {
            customer: {
                relation: Model.BelongsToOneRelation,
                modelClass: Customer,
                join: {
                    from: 'users.id',
                    to: 'customer.id_user'
                }
            },
            admin: {
                relation: Model.BelongsToOneRelation,
                modelClass: Admin,
                join: {
                    from: 'users.id',
                    to: 'admin.id_user'
                }
            }
        }
    }
}

const getUserModel = () => {
    return User.query().withGraphFetched({
        customer: true
    }).then(user => {
        return user;
    });
}

const showUserCustomerModel = (id) => {
    let getId = parseInt(id);
    return User.query().where('status', 'customer').withGraphFetched({
        customer: true
    }).findById(getId);
}

const showUserAdminModel = (id) => {
    let getId = parseInt(id);
    return User.query().where('status', 'admin').withGraphFetched({
        admin: true
    }).findById(getId);
}

const postUserModel = (name, email, password, email_verify, status) => {
    let data = {
        name: name, email: email, password: password, email_verify: email_verify, status: status
    };
    return User.query().insert(data);
}

const updateUserModel = (name, email, password, email_verify, status, id) => {
    let data = {
        name: name,
        email: email,
        password: password,
        email_verify: email_verify,
        status: status
    };
    let getId = parseInt(id);

    return User.query().findById(getId).patch(data)
}

const deleteUserModel = (id) => {
    let getId = parseInt(id);
    return User.query().deleteById(getId);
}

module.exports = User;

module.exports = {
    getUserModel,
    showUserCustomerModel,
    showUserAdminModel,
    postUserModel,
    updateUserModel,
    deleteUserModel
}
