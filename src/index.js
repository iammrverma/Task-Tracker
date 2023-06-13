import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Task from "./components/task";
import Empty from "./components/empty";
import NewTask from "./components/newTask";
import Navbar from "./components/navbar";
import Main from "./components/main";
import NewTask from "./components/newTask";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Navbar />
    <div className="container jcc">
      <Main />
    </div>
  </>
);
