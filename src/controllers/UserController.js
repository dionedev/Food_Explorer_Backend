const CustomError = require("../utils/CustomError")
const knex = require("../database/knex")

class UserControllers {
  async create(request, response) {
    const {name, email, password} = request.body

    if(!name || !email || !password) {
      throw new CustomError("Por favor, preencha todos os campos.")
    }

    const checkUserExists = await knex("users").where({email}).first()

    if(checkUserExists) {
      throw new CustomError("Este e-mail já está em uso")
    }

    await knex("users").insert({
      name,
      email,
      password
    })

    return response.status(201).json()
  }
}
module.exports = UserControllers