import React from "react";
import { useSelector } from "react-redux";

import "../general.css";

const TotalCompleteItems = () => {
  const completedTodo = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === true)
  );
  return (
    <h4 className="complete">Total Complete Items: {completedTodo.length}</h4>
  );
};

export default TotalCompleteItems;
