const { Router } = require("express")
const DishController = require("../controllers/DishController")

const dishController = new DishController
const dishRoutes = Router()

dishRoutes.post("/", dishController.create)

module.exports = dishRoutes