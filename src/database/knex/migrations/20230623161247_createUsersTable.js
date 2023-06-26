exports.up = (knex) => knex.schema.hasTable("users").then(exists => {
  if(!exists) {
    return knex.schema.createTable("users", table => {
      table.increments("id").primary()
      table.boolean("isAdmin").default(false)
      table.text("name")
      table.text("email")
      table.text("password")
      table.text("avatar").nullable()
      table.timestamp("created_at").default(knex.fn.now())
      table.timestamp("updated_at").default(knex.fn.now())
    })
  }
})

exports.down = (knex) => knex.schema.dropTable("users")
