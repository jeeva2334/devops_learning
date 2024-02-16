const mongoose = require("mongoose")

const { Schema,model } = mongoose

const todoListSchema = new Schema({
    title:String,
    body:String
})

const todoModel = model('Todo',todoListSchema)

module.exports = todoModel