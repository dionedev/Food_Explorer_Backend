const CustomError = require("../utils/CustomError")
const knex = require("../database/knex")

class DishController {
  async create(request, response) {
    const {name, category, description, price} = request.body

    if(!name || !category || !description || !price) {
      throw new CustomError("Por favor, preencha todos os campos.")
    }

    const checkDishExists = await knex("dishes").where({name}).first()

    if(checkDishExists) {
      throw new CustomError("Este prato já existe")
    }

    await knex("dishes").insert({
      name,
      category,
      description,
      price
    })

    response.status(201).json({message: "prato criado com sucesso."})
  }
}
module.exports = DishController