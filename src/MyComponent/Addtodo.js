import React, { useState } from 'react'


export const Addtodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setdesc] = useState("");
    const submit = (e)=>{
        e.preventDefault();//stops page from reloading
        if (!title || !desc) {
                alert("Title or Description cannot be empty")
        }
        addTodo(title,desc);
    }
    return (
        <div className='container my-3'>
            <form onSubmit={submit}>
                <h3>Add a Todo</h3>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Todo Tittle</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="tittle" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setdesc(e.target.value)}} className="form-control" id="desc" />
                </div>

                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}
