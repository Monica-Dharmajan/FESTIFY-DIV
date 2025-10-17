"use client";
import { useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [current, setCurrent] = useState("");

  function addTodo() {
    const trimmed = current.trim();
    if (!trimmed) return;
    setTodos((prev) => [trimmed, ...prev]);
    setCurrent("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") addTodo();
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ color: "red" }}>Todo List</h2>
      <div>
        <input
          type="text"
          value={current}
          onChange={(e) => setCurrent(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter todo"
          style={{
            marginTop: "20px",
            padding: "10px",
            marginRight: "10px",
            border: "2px solid red",
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px",
            maxWidth: "90%",
            width: "300px",
          }}
        />
        <button
          onClick={addTodo}
          style={{
            padding: "10px",
            color: "white",
            backgroundColor: "red",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
            marginTop: "10px",
          }}
        >
          Add
        </button>
      </div>
      <div
        style={{
          marginTop: "20px",
          textAlign: "left",
          display: "inline-block",
          minWidth: "320px",
          maxWidth: "90%",
        }}
      >
        <h3 style={{ color: "red" }}>Recently added Todos</h3>
        {todos.length === 0 ? (
          <p>--No todos yet--</p>
        ) : (
          todos.map((t, idx) => <div key={idx}>{t}</div>)
        )}
      </div>
    </div>
  );
}