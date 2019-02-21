const db = require('../dbConfig');

module.exports = {
    get,
    getById,
    getDishes,
    insert,
    update,
    remove,
};

function get(){
    return db('dishes');
}

function getById(id){
    return db('dishes')
        .where({ id })
        .first();
}

function insert (dish){
    return db('dishes')
        .insert(dish)
        .then(ids => 
            { return getById(ids[0])}
        );
}

function update(id, changes){
    return db('dishes')
        .where({ id })
        .update(changes);
}

function remove(id){
    return db('dishes')
        .where('id', id)
        .del();
}