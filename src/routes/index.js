const { Router } = require("express")

const userRoutes = require("./users.routes")
const dishRoutes = require("./dishes.routes")

const routes = Router()

routes.use("/user", userRoutes)
routes.use("/new-dish", dishRoutes)

module.exports = routes

