
exports.up = function(knex, Promise) {
    return knex.schema.createTable('propulsion', function(table){
      table.increments();
      table.string('title');
      table.text('description');
      table.string('image');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('propulsion');
};
