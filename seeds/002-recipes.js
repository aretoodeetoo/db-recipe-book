
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Seafood Gumbo', dish_id: 1},
        {name: 'Chicken and Sausage Gumbo', dish_id: 1},
        {name: 'Spicy Crawfish Etouffee', dish_id: 2},
        {name: 'Mild Crawfish Etouffee', dish_id: 2},
        {name: 'Seafood Jambalaya', dish_id: 5},
        {name: 'Chicken and Sausage Jambalaya', dish_id: 5}
      ]);
    });
};
