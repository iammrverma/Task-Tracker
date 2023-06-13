import React, { useState } from "react";
import { FaCheck, FaTimes , FaAngleDown} from "react-icons/fa";
import Task from "./task";
import { v4 as uuidv4 } from "uuid";
const NewTask = () => {
  const [cancelClicked, setCancelClicked] = useState(false);
  const [savelClicked, setSaveClicked] = useState(false);

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const taskCounter  = JSON.parse(localStorage.getItem("taskCounter")) || 0;
  const handleCancelClicked =   () => {
    setCancelClicked(true);       
  };
  const handleSaveClicked = () => {
    const title = document.getElementById("title").innerText;
    const description = document.getElementById("description").innerText;
    if (
      !(title.toLowerCase() === "title") &&
      !(description.toLowerCase() === "Add details")
    ) {
      saveTask(title, description);
      setSaveClicked(true);
      window.location.reload();
    }
  };
  const saveTask = (title, description) => {
    const newTask = {
      id: uuidv4(), // Generate a unique ID using UUID
      title: title,
      description: description,
    };
  
    const updatedTasks = [...tasks, newTask];
  
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    localStorage.setItem("taskCounter", JSON.stringify(tasks.length+1));
  };
  return (
    <div>
      {!cancelClicked && !savelClicked ? (
        <div className="card" style={{ width: "36rem" }}>
          <div className="card-body">
            <div className="space-between mx-3">
              <div onClick={handleCancelClicked}>
                <FaTimes size={24} />
              </div>
              <div onClick={handleSaveClicked}>
                <FaCheck size={24} />
              </div>
            </div>
            <h5
              className="card-title m-3"
              contentEditable="true"
              style={{ outline: "none" }}
              id="title"
            >
              Title
            </h5>
            <hr />
            <p
              className="m-3"
              id="description"
              width="100%"
              contentEditable="true"
              style={{ outline: "none" }}
            >
              Add details
            </p>
          </div>
        </div>
      ) : (
        <Task />
      )}
    </div>
  );
};
export default NewTask;
