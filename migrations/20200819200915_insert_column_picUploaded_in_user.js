
exports.up = function(knex, Promise) {
    return knex.schema.table('users', table => {
        table.integer('picUploaded').defaultTo(0)
    })
};

exports.down = function(knex, Promise) { 
    return knex.schema.table('users', table => {
      table.dropColumn('picUploaded')
  })
};
