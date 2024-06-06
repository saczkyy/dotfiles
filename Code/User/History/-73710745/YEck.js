import React from 'react'

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
    return (
        <div className="Todo">
            <p className={`${task.completed ? "completed" : "incompleted"}`}
              onClick={() => toggleComplete(task.id)}>{task.task}</p>
            <p></p>
        </div>
    )
}
