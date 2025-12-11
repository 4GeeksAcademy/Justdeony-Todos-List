import React, { useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="container">
      <h2>My Todos List</h2>
      <div><h5>{todos.length} ideas created!</h5></div>
      <ul>
        <li>
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setTodos((prev) => [...prev, inputValue]);
                setInputValue("");
              }
            }}
            placeholder="What You're Thinking?"
          />
        </li>

        {todos.map((item, index) => (
          <li key={index}>
            {item}
            <button
              onClick={() => setTodos(todos.filter((_, i) => i !== index))}
              style={{ marginLeft: "1200px" }}
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
