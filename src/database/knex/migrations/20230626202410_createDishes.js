exports.up = (knex) => knex.schema.hasTable("dishes").then(exists => {
  if(!exists) {
    return knex.schema.createTable("dishes", table => {
      table.increments("id").primary()
      table.integer("user_id").references("id").inTable("users")
      table.text("name")
      table.text("category")
      table.text("description")
      table.decimal("price", 8, 2)
      table.text("image")
      table.timestamp("created_at").default(knex.fn.now())
      table.timestamp("updated_at").default(knex.fn.now())
    })
  }
})

exports.down = (knex) => knex.schema.dropTable("dishes")
