
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').del()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {name: 'Chicken and Sausage Gumbo'},
        {name: 'Crawfish Etouffee'},
        {name: 'Morning Call Beignets'},
        {name: 'Red Beans and Rice'},
        {name: 'Cajun Jambalaya'}
      ]);
    });
};
