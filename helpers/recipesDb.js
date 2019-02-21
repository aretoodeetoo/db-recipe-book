const db = require('../dbConfig');

module.exports = {
    get,
    getById,
    insert,
    update,
    remove,
};

function get(){
    return db('recipes');
}

function getById(id){
    return db('recipes')
        .where({ id })
        .first();
}
