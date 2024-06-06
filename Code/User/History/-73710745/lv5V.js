import React from 'react'

export const Todo = ({ task, rodzaj, toggleComplete }) => {
    return (
        <div className="Todo">
            <p className={`${task.completed ? "completed" : "incompleted"}`}
              onClick={() => toggleComplete(task.id)}>{task.task}</p>
            <p>Rodzaj: {rodzaj}</p>
        </div>
    )
}
