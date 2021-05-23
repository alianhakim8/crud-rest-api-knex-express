const { Model } = require('objection');
const knex = require('../../config/db/knex');

Model.knex(knex);

class Admin extends Model {
    static get tableName() {
        return 'admin';
    }
}

module.exports = Admin;