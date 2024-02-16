import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateTodo() {
    const HOST = process.env.HOST
    const nav =  useNavigate()
    const [formData, setFormData] = useState({
        title: '',
        body: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        const { data } = await axios.post("http://"+ HOST +"/todos/add",formData)
        console.log(data);
        setFormData({
            title: "",
            body: ""
        })
        nav("/")
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form className="w-full max-w-md" onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="title"
                    >
                    Title
                    </label>
                    <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="title"
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    />
                </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="body"
                    >
                    Body
                    </label>
                    <textarea
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="body"
                    placeholder="Body"
                    name="body"
                    value={formData.body}
                    onChange={handleChange}
                    />
                </div>
                </div>
                <div className="flex items-center justify-center">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Submit
                </button>
                </div>
            </form>
        </div>
    );
}

export default CreateTodo;