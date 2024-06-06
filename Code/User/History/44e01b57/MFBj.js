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
      <p>Please select your favorite Web language:</p>
 <input type="radio" id="html" name="fav_language" value="HTML">
 <label for="html">HTML</label><br>
 <input type="radio" id="css" name="fav_language" value="CSS">
 <label for="css">CSS</label><br>
 <input type="radio" id="javascript" name="fav_language" value="JavaScript">
 <label for="javascript">JavaScript</label>
      
      <button type="submit" className="todo-btn">
        Add
      </button>
    </form>
  );
};
