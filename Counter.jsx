// src/components/Counter.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>
      <button
        onClick={() => dispatch(increment())}
        style={{
          padding: "10px 20px",
          margin: "10px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(decrement())}
        style={{
          padding: "10px 20px",
          margin: "10px",
          backgroundColor: "#f44336",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
