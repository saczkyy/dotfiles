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
      <input type="radio" id="pS" name="rodzaj" value="Przesylka S" />
      <label for="pS">Przesylka S</label>
      <input type="radio" id="pM" name="rodzaj" value="Przesylka M" />
      <label for="pM">Przesylka M</label>
      <input type="radio" id="pL" name="rodzaj" value="Przesylka L" />
      <label for="pL">Przesylka L</label>

      <button type="submit" className="todo-btn">
        Add
      </button>
    </form>
  );
};
