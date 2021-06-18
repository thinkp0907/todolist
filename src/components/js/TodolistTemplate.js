import React from "react";
import "../css/TodolistTemplate.css";

const TodolistTemplate = ({ form, children }) => {
  return (
    <main className="todo-list-template">
      <div className="todo-list-title">오늘 할 일</div>
      <section className="form-wrapper">{form}</section>
      <section className="-todoitemListwrapper">{children}</section>
    </main>
  );
};

export default TodolistTemplate;
