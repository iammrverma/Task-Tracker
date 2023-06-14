import React, { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

const NewTask = ({ onNext, existingTask }) => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const taskCounter = JSON.parse(localStorage.getItem("taskCounter")) || 0;

  const [title, setTitle] = useState(existingTask ? existingTask.title : "Title");
  const [description, setDescription] = useState(existingTask ? existingTask.description : "Description Here");
  const [id, setId] = useState(existingTask ? existingTask.id : uuidv4());

  const handleCancelClicked = (nextComponent) => {
    onNext(nextComponent);
  };

  const handleSaveClicked = (nextComponent) => {
    if (
      !(title.toLowerCase().trim() === "title" || title.toLowerCase().trim() === "") &&
      !(description.toLowerCase().trim() === "add details" || description.toLowerCase().trim() === "")
    ) {
      saveTask();
      onNext(nextComponent);
    }
  };

  const handleTitleInput = (e) => {
    setTitle(e.target.innerText);
    restoreCursorPosition(e.target);
  };

  const handleDescriptionInput = (e) => {
    setDescription(e.target.innerText);
    restoreCursorPosition(e.target);
  };

  const saveTask = () => {
    const newTask = {
      id: id,
      title: title,
      description: description,
      completed: false
    };

    const updatedTasks = tasks.filter((task) => task.id !== id);

    localStorage.setItem("tasks", JSON.stringify([...updatedTasks, newTask]));
    localStorage.setItem("taskCounter", JSON.stringify(tasks.length + 1));
  };

  const restoreCursorPosition = (element) => {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(element);
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);
  };

  return (
    <div>
      <div className="card" style={{ width: "36rem" }}>
        <div className="card-body">
          <div className="space-between mx-3">
            <div onClick={() => handleCancelClicked(taskCounter === 0 ? "Empty" : "TaskList")}>
              <FaTimes size={24} />
            </div>
            <div onClick={() => handleSaveClicked("TaskList")}>
              <FaCheck size={24} />
            </div>
          </div>
          <h5
            className="card-title m-3"
            contentEditable="true"
            style={{ outline: "none" }}
            onInput={handleTitleInput}
            suppressContentEditableWarning={true}
          >
            {title}
          </h5>
          <hr />
          <p
            className="m-3"
            id="description"
            width="100%"
            contentEditable="true"
            style={{ outline: "none" }}
            onInput={handleDescriptionInput}
            suppressContentEditableWarning={true}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewTask;
