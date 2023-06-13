import React, { useState } from "react";
import { FaCheck, FaAngleDown, FaEdit, FaTrash } from "react-icons/fa";

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const Task = ({ taskId, taskTitle, taskDescription, taskCompleted }) => {
  const [expandedItemId, setExpandedItemId] = useState(null);

  const handleEdit = (taskId) => {};
  const handleDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    localStorage.setItem("taskCounter", JSON.stringify(updatedTasks.length));
  };
  const handleMarkDone = (taskId) => {};
  const handleAngleDownClick = (taskId) => {
    setExpandedItemId(taskId === expandedItemId ? null : taskId);
  };

  return (
    <div className="accordion-item my-2" key={taskId}>
      <h2 className="accordion-header">
        <div className="icons-container">
          <FaEdit className="icon" onClick={() => handleEdit(taskId)} />
          <FaTrash className="icon" onClick={() => handleDelete(taskId)} />
          <FaCheck className="icon" onClick={() => handleMarkDone(taskId)} />
          <FaAngleDown
            className={`icon ${expandedItemId === taskId ? "active" : ""}`}
            onClick={() => handleAngleDownClick(taskId)}
          />
        </div>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${taskId}`}
          aria-expanded={expandedItemId === taskId ? "true" : "false"}
          aria-controls={`collapse${taskId}`}
        >
          {taskTitle}
        </button>
      </h2>
      <div
        id={`collapse${taskId}`}
        className={`accordion-collapse collapse ${expandedItemId === taskId ? "show" : ""
          }`}
        aria-labelledby={`heading${taskId}`}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">{taskDescription}</div>
      </div>
    </div>
  );
};

export default Task;
