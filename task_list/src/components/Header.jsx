import React from "react";
import TaskList from "./taskList";
import { useState } from "react";
import Task from "./Task";

const Header = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    setTodos([...todos, {id: 0, task: todo, completed: false, isEditing: false}])
    console.log(todos)
  }

  return (
    <div className="TodoWrapper">
      <h1>To-Do List App</h1>
      <TaskList addTodo={addTodo}/>
      {todos.map((todo, index) => (
        <Task task={todo} key={index}/>
      ))} 
    </div>
  );
};

export default Header;
