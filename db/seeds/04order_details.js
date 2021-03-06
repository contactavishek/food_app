const faker = require("faker");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.all([
    knex.raw("ALTER SEQUENCE order_details_id_seq RESTART WITH 1"),
    knex("order_details")
      .del()
      .then(function () {
        return Promise.all([
          knex("order_details").insert({
            food_id: 1,
            user_id: 1,
            quantity: Math.round(faker.random.number()/1000),
            picked_up: 0
          }),
          knex("order_details").insert({
            food_id: 2,
            user_id: 1,
            quantity: Math.round(faker.random.number()/1000),
            picked_up: 0
          }),
          knex("order_details").insert({
            food_id: 3,
            user_id: 1,
            quantity: Math.round(faker.random.number()/1000),
            picked_up: 0
          }),
          knex("order_details").insert({
            food_id: 1,
            user_id: 2,
            quantity: Math.round(faker.random.number()/1000),
            picked_up: 0
          })


        ]);
      })
  ]);
};
