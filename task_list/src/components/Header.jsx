import React from "react";
import TaskList from "./taskList";
import { useState, useEffect } from "react";
import Task from "./Task";
import { v4 as uuidv4 } from "uuid";
uuidv4();

const Header = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log("Tareas almacenadas en localStorage:", localStorage.getItem("todos"));
  }, [todos]);

  const addTodo = (todo) => {
    const newTodo = { id: uuidv4(), task: todo, completed: false, isEditing: false };
    setTodos([...todos, newTodo]);
    console.log(todos);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isEditing: true };
        }
        return todo;
      })
    );
  };

  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const updateTodo = (id, updatedTask) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, task: updatedTask, isEditing: false };
        }
        return todo;
      })
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>To-Do List App</h1>
      <TaskList addTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <Task
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            completeTodo={completeTodo}
            updateTodo={updateTodo}
          />
        ) : (
          <Task
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            completeTodo={completeTodo}
          />
        )
      )}
    </div>
  );
};

export default Header;
