import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Task from "./components/task";
import Empty from "./components/empty";
import NewTask from "./components/newTask";
import Navbar from "./components/navbar";

// Get existing appInfo from local storage or create a new object if it doesn't exist
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  <Navbar/>
  <div className="container jcc">
    {tasks.length === 0 ? <Empty /> : <Task />}
  </div>
  </>
);
