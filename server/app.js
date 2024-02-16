const express = require("express")
const basicRouter = require("./routes/basic")
const bodyParser = require("body-parser")
const todoRoutes = require("./routes/todoRoutes")
const mongoose  = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors("*"))
app.use(bodyParser.json())
app.use("/",basicRouter)
app.use("/todos",todoRoutes)

const URL = process.env.URL || "localhost:27017"
const PORT = process.env.PORT || 4000

mongoose.connect("mongodb://"+ URL +"/").then(()=>{
    app.listen(PORT,'0.0.0.0',()=>{
        console.log("Server is running at port 4000")
    })
}).catch((e)=>{
    console.log(e)
})
