const { Router } = require("express")
const DishController = require("../controllers/DishController")

const dishController = new DishController
const dishRoutes = Router()

dishRoutes.post("/:user_id", dishController.create)
dishRoutes.get("/my-dishes/:id", dishController.index)
dishRoutes.get("/:id", dishController.show)
dishRoutes.delete("/:id", dishController.delete)

module.exports = dishRoutes