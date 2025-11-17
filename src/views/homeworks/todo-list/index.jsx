import React, { useState } from "react";
import TodosTempData from "./tasks-data.json";

function TodoList() {
  const [todos, setTodos] = useState(TodosTempData);

  const styles = {
    doneTask: {
      color: "gray",
      textDecoration: "line-through",
      lineHeight: 1.5,
    },
    normalTask: {
      color: "black",
    },
  };

  return (
    <div>
      {todos.map((todo, index) => {
        return (
          <div
            style={todo.isDone ? styles["doneTask"] : styles["normalTask"]}
            key={index}
          >
            {todo.task}
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
