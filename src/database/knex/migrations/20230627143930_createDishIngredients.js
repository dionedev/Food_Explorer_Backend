exports.up = knex => knex.schema.hasTable("dish_ingredients").then(exists => {
  if(!exists) {
    return knex.schema.createTable("dish_ingredients", table => {
      table.increments("id").primary()
      table.integer("dish_id").references("id").inTable("dishes")
      table.text("name").notNullable()
    })
  }
})

exports.down = knex => knex.schema.dropTable("dish_ingredients")
