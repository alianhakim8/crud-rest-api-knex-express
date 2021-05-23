const { Model } = require('objection');
const knex = require('../../config/db/knex');

Model.knex(knex);

class Customer extends Model {
    static get tableName() {
        return 'customer';
    }
}

module.exports = Customer;