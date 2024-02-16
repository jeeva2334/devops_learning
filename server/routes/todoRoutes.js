const express = require("express")
const { addTodoList, getTodos, deleteTodos, deleteAllTodos } = require("../controllers/todoControllers")
const todoRoutes = express.Router()

todoRoutes.post("/add",addTodoList)
todoRoutes.get('/get',getTodos)
todoRoutes.delete('/delete/:id',deleteTodos)
todoRoutes.delete('/delete',deleteAllTodos)

module.exports = todoRoutes