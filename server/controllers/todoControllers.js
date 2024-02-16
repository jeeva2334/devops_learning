const todoModel = require("../models/todoModel")

const addTodoList = (async(req,res)=>{
    const { title,body } = req.body
    try {
        const newTodo = await todoModel.create({
            title:title,
            body:body
        })
        await newTodo.save()
        res.json({
            message: "Succesfully Saved the todo"
        })
    } catch (error) {
        res.json({
            message: "something went wrong " + error
        })
    }
})

const getTodos = (async(req,res)=>{
    try {
        const data = await todoModel.find({})
        res.json({
            message: "Got Todos",
            todos: data
        })
    } catch (error) {
        res.json({
            message: "something went wrong " + error
        })
    }
})

const deleteTodos = (async(req,res)=>{
    const { id } = req.params
    try {
        await todoModel.findOneAndDelete({_id:id})
        res.json({
            message: `Todo deleted succesfully`
        })
    } catch (error) {
        res.json({
            message: "something went wrong " + error
        })
    }
})

const deleteAllTodos = (async(req,res)=>{
    try {
        await todoModel.deleteMany({})
        res.json({
            message: `Todo deleted succesfully`
        })
    } catch (error) {
        res.json({
            message: "something went wrong " + error
        })
    }
})

module.exports = {
    addTodoList,
    getTodos,
    deleteTodos,
    deleteAllTodos
}