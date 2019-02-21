
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Seafood Gumbo', dish_id: 1, instructions: 'Start with a roux...'},
        {name: 'Chicken and Sausage Gumbo', dish_id: 1, instructions: 'Start with a roux...'},
        {name: 'Spicy Crawfish Etouffee', dish_id: 2, instructions: 'Boil your chicken down for stock'}, ,
        {name: 'Mild Crawfish Etouffee', dish_id: 2, instructions: 'Add less spice'},
        {name: 'Seafood Jambalaya', dish_id: 5, instructions: 'Smother down some bacon...'},
        {name: 'Chicken and Sausage Jambalaya', dish_id: 5, instructions: 'Saute your mirepoix in your bacon fat...'}
      ]);
    });
};
