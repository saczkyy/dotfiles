import React, { useState } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  return (
    <div className="TodoWrapper">
      <h1>Todolist application</h1>
      <TodoForm addTodo={addTodo} />

      {todos.map((todo) => (
        <Todo key={todo.id} task={todo} />
      ))}
    </div>
  );
};
