import './App.css';
import Header from "./MyComponent/Header";
import { Addtodo } from "./MyComponent/Addtodo";
import { Footer } from "./MyComponent/Footer";
import { Todos } from "./MyComponent/Todos";
import React, { useState } from 'react';

function App() {
  const onDelete = (todo) => {
    console.log("I am on delete of todo", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }

  const addTodo = (title,desc)=>{
    console.log("I am adding todo",title,desc);
    let sno;
    if (todos.length ==0) {
      sno =0;
    }
    else{

      sno = todos[todos.length-1].sno +1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc : desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to market",
      desc: "Fetch grocery"
    },
    {
      sno: 2,
      title: "Go to college",
      desc: "Study"
    },
    {
      sno: 3,
      title: "Go to holiday",
      desc: "Enjoy"
    }
  ]);
  return (
    <>
      <Header title="My Todos List" searchBar={false} />
      <Addtodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
