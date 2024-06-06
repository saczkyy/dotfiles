import React from "react";

export const Todo = ({ task, rodzaj }) => {
  return (
    <div className="Todo">
      <p className={`${task.completed ? "completed" : "incompleted"}`}>
        {task.task}
      </p>
      <p>Rodzaj: {rodzaj}</p>
    </div>
  );
};
