const CustomError = require("../utils/CustomError")
const knex = require("../database/knex")

class DishController {
  async create(request, response) {
    const {name, category, ingredients, price, description} = request.body
    const {user_id} = request.params

    if(!name || !category || !ingredients || !price || !description) {
      throw new CustomError("Por favor, preencha todos os campos.")
    }

    const [dish_id] = await knex("dishes").insert({
      user_id,
      name,
      category,
      description,
      price
    })

    const ingredientsInsert = ingredients.map(ingredient => {
      return {
        name: ingredient,
        dish_id,
        user_id
      }
    })

    await knex("dish_ingredients").insert(ingredientsInsert)

    response.status(201).json()
  }

  async show(request, response) {
    const { id } = request.params

    const dish = await knex("dishes").where({ id }).first()
    const ingredients = await knex("dish_ingredients").where({ dish_id: id }).orderBy("name")

    return response.status(200).json({
      ...dish,
      ingredients
    })
  }

  async index(request, response) {
    const { id } = request.params

    const dishes = await knex("dishes").where({ id })

    return response.status(200).json(dishes)
  }
  
  async delete(request, response) {
    const { id } = request.params

    await knex("dishes").where({ id }).delete()

    return response.status(200).json({
      message: "Nota deletada com sucesso"
    })
  }
}
module.exports = DishController