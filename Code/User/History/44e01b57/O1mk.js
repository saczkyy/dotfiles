import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [rodzaj, setRodzaj] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addTodo(value, rodzaj);
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
      <div className="radioButtons">
        <div onChange={(e) => setRodzaj(e.target.value)}>
          <input type="radio" id="pS" name="rodzaj" value="S" />
          <label for="pS">Przesylka S</label>
        </div>
        <div onChange={(e) => setRodzaj(e.target.value)}>
          <input type="radio" id="pM" name="rodzaj" value="M" />
          <label for="pM">Przesylka M</label>
        </div>
        <div onChange={(e) => setRodzaj(e.target.value)}>
          <input type="radio" id="pL" name="rodzaj" value="L" />
          <label for="pL">Przesylka L</label>
        </div>
      </div>

      <button type="submit" className="todo-btn">
        Add
      </button>
    </form>
  );
};
