import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [rodzaj, setRodzaj] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addTodo(value);
      setValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="dodaj do listy"
      />
      <input type="radio" id="html" name="rodzaj" value="Przesylka S" />
      <label for="html">HTML</label>
      <input type="radio" id="css" name="rodzaj" value="Przesylka M" />
      <label for="css">CSS</label>
      <input type="radio" id="javascript" name="rodzaj" value="Przesylka L" />
      <label for="javascript">JavaScript</label>

      <button type="submit" className="todo-btn">
        Add
      </button>
    </form>
  );
};
