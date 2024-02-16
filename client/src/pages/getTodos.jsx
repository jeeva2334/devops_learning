import axios from 'axios'
import React, { useEffect, useState } from 'react'

function GetTodos() {
    const HOST = process.env.HOST || "0.0.0.0:4000"
    const [todos,setTodos] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    useEffect(()=>{
        fetchTodos()
    },[])
    const fetchTodos = async() =>{
        setIsLoading(true)
        const {data} = await axios.get("http://"+ HOST +"/todos/get")
        setTodos(data.todos)
        setIsLoading(false)
    }
    const deleteTodo = async(id) =>{
        setIsLoading(true)
        await axios.delete(`http://localhost:4000/todos/delete/${id}`)
        await fetchTodos()
        setIsLoading(false)
    }
    const deleteAllTodo = async(id) =>{
        setIsLoading(true)
        await axios.delete(`http://0.0.0.0:4000/todos/delete`)
        await fetchTodos()
        setIsLoading(false)
    }
    return (
        <div>
            <h1 className='text-center font-bold text-2xl my-4'>Get Todos</h1>
            {isLoading?<div className="flex-col gap-4 w-full flex items-center justify-center">
                <div className="w-14 h-14 border-8 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full">        
                </div>
            </div>:todos.length > 0 ? 
                <div className='grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-7 p-4'>
                    {todos.map((item)=>(
                        <div key={item._id} className='bg-gray-500 flex justify-between items-center hover:scale-105 transition-all duration-200 ease-in-out cursor-default p-4 rounded-lg text-white'>
                            <div className='w-[70%]'>
                                <h1>{item.title}</h1>
                                <p>{item.body}</p>
                            </div>
                            <div className='cursor-pointer' onClick={()=>deleteTodo(item._id)}>
                                <img src='trash.png' alt='delete' className='w-7' />
                            </div>
                        </div>
                    ))}
                </div>
            :<div className='text-center font-bold text-2xl my-4'>No Todos Found</div>
            }
            <button disabled={todos.length < 0} onClick={deleteAllTodo} className={`w-16 ${todos.length > 0 ? "bg-red-600" : "bg-red-400"} hover:scale-105 transition-all ease-in-out duration-200 text-white rounded-md fixed bottom-10 right-10`}>
                Delete All
            </button>
        </div>
    )
}

export default GetTodos