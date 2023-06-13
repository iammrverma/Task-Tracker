import React, { useState } from "react";
import { FaCheck, FaTimes, FaAngleDown } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";


const NewTask = ({ onNext }) => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const taskCounter = JSON.parse(localStorage.getItem("taskCounter")) || 0;

  const handleCancelClicked = (nextComponent) => { onNext(nextComponent); };

  const handleSaveClicked = (nextComponent) => {
    const title = document.getElementById("title").innerText;
    const description = document.getElementById("description").innerText;

    if (
      !(title.toLowerCase() === "title" || title.toLowerCase() === "") &&
      !(description.toLowerCase() === "add details" || description.toLowerCase() === "")
    ) {
      saveTask(title, description);
      window.location.reload();
      onNext(nextComponent);
    }
  };
  // if id is not provided Generate a unique ID using UUID help in identifieng wheter adding new task of editing old one
  const saveTask = (title, description, id=uuidv4()) => {
    const newTask = {
      id: id, 
      title: title,
      description: description,
    };
    const updatedTasks = [...tasks, newTask];

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    localStorage.setItem("taskCounter", JSON.stringify(tasks.length + 1));
  };


  return (
    <div>
      <div className="card" style={{ width: "36rem" }}>
        <div className="card-body">
          <div className="space-between mx-3">
            <div onClick={() => handleCancelClicked(taskCounter === 0 ? "Empty" : "Task")}><FaTimes size={24} /></div>
            <div onClick={() => handleSaveClicked("Task")}><FaCheck size={24} /></div>
          </div>
          <h5 className="card-title m-3" contentEditable="true" style={{ outline: "none" }} id="title">Title</h5>
          <hr />
          <p className="m-3" id="description" width="100%" contentEditable="true" style={{ outline: "none" }}>
            Add details
          </p>
        </div>
      </div>
    </div>
  );
};
export default NewTask;
