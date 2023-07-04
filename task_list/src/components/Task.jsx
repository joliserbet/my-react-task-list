import React from 'react'


const Task = ({task, completeTodo, deleteTodo, editTodo}) => {
  return (
    <div className='Todo'>
      <p>{task.task}</p>
      <div className='icons'>
        <img src="./public/pencil.svg" alt="trash" className='fa-trash'/>
        <img src="./public/trash.svg" alt="" />
      </div>
    </div>  
  )
}

export default Task 