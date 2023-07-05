import { useState } from "react";
import React from "react";


const TaskList = ({addTodo}) => {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
      e.preventDefault();
      addTodo(value);
      setValue("")
    }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="What is the task now"
        onChange={e => {setValue(e.target.value)}}
      />
      <button className="todo-btn">Add Task</button>
    </form>
  );        
};

export default TaskList;
