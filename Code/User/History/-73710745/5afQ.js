import React from "react";

export const Todo = ({ task, rodzaj }) => {
  console.log(rodzaj);
  return (
    <div className="Todo">
      <p>{task.task}</p>
      <p>Rodzaj: {rodzaj}</p>
    </div>
  );
};
