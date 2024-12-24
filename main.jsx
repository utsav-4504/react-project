import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./Redux/Store.jsx";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import TodoList from "./Todolist.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
      <TodoList />
    </React.StrictMode>
  </Provider>
);
