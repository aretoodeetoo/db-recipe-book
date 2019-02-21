
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', function(tbl){
        tbl.increments();
        
        tbl.string('Name', 255).notNullable();
        tbl.string('Instructions');

        tbl
            .integer('dish_id')
            .unsigned()
            .references('id')
            .inTable('dishes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');

        tbl
            .integer('ingredient_id')
            .unsigned()
            .references('id')
            .inTable('ingredients')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes');
};
