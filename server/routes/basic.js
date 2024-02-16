const express = require("express")
const { home } = require("../controllers/basicController")
const basicRouter = express.Router()

basicRouter.get("/",home)

module.exports = basicRouter