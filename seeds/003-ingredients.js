
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'mirepoix'},
        {name: 'roux'},
        {name: 'butter'},
        {name: 'smoked sausage'},
        {name: 'Tony Chachere'},
        {name: 'Camellia Red Beans'},
        {name: 'Crystal hot sauce'},
        {name: 'Rice'},
        {name: 'chicken'}
      ]);
    });
};
