const { Router } = require("express")

const userRoutes = require("./users.routes")

const routes = Router()

routes.use("/user", userRoutes)

module.exports = routes

