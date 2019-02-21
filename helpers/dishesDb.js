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

function getDishRecipes(dishId){
    return db('recipes as r')
        .join('dishes as d', 'd.id', 'r.dish_id')
        .select('r.id', 'r.text', 'd.name as dishRecipes')
        .where('r.dish_id', dishId);
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