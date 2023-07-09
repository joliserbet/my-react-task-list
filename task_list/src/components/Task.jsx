import React, { useState } from "react";

const Task = ({ task, completeTodo, deleteTodo, editTodo, updateTodo }) => {
  const [editedTask, setEditedTask] = useState(task.task);

  const handleDelete = (e) => {
    e.stopPropagation();
    deleteTodo(task.id);
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    editTodo(task.id);
  };

  const handleComplete = () => {
    completeTodo(task.id);
  };

  const handleUpdate = () => {
    updateTodo(task.id, editedTask);
  };

  const handleChange = (e) => {
    setEditedTask(e.target.value);
  };

  return (
    <div className={`Todo ${task.completed ? "completed" : ""}`} onClick={handleComplete}>
      {task.isEditing ? (
        <form onSubmit={handleUpdate}>
          <input type="text" value={editedTask} onChange={handleChange} />
          <button type="submit">Save</button>
        </form>
      ) : (
        <p>{task.task}</p>
      )}
      <div className="icons">
        <img src="./public/pencil.svg" alt="edit" className="pencil" onClick={handleEdit} />
        <img src="./public/trash.svg" alt="trash" className="trash" onClick={handleDelete} />
      </div>
    </div>
  );
};

export default Task;
