exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable("restaurants", function (table) {
      table.increments();
      table.string("restaurant_phone_number");
      table.string("address");
    }),
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable("restaurants"),
  ]);
};
