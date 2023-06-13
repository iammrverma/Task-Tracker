import React, { useState } from "react";
import NewTask from "./newTask";

import { FaCheck, FaTimes, FaAngleDown, FaEdit, FaTrash } from "react-icons/fa";

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const Task = () => {
  const [addTaskClicked, setAddTaskClicked] = useState(false);
  const [expandedItemId, setExpandedItemId] = useState(null);

  const handleAngleDownClick = (itemId) => {
    setExpandedItemId(itemId === expandedItemId ? null : itemId);
  };

  const handleCheckClick = (itemId) => {
    
  };
  const handleAddTaskClick = () => {
    setAddTaskClicked(true);
  };

  return (
    <div className="p-3" style={{ width: "36rem" }}>
      {!addTaskClicked ? (
        <div className="card p-2">
          <div className="accordion" id="accordionExample">
            {tasks.map((task) => (
              <div className="accordion-item my-2" key={task.id}>
                <h2 className="accordion-header">
                  <div className="icons-container">
                    <FaEdit className="icon" />
                    <FaTrash className="icon" />
                    <FaCheck className="icon" onClick={() => handleCheckClick(task.id)}/>
                    <FaAngleDown className={`icon ${expandedItemId === task.id ? "active" : ""}`} onClick={() => handleAngleDownClick(task.id)}/>
                  </div>
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${task.id}`}
                    aria-expanded={
                      expandedItemId === task.id ? "true" : "false"
                    }
                    aria-controls={`collapse${task.id}`}
                  >
                    {task.title}
                  </button>
                </h2>
                <div
                  id={`collapse${task.id}`}
                  className={`accordion-collapse collapse ${expandedItemId === task.id ? "show" : ""}`}
                  aria-labelledby={`heading${task.id}`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">{task.description}</div>
                </div>
              </div>
            ))}
          </div>
          <button className="btn btn-primary" onClick={handleAddTaskClick}>
            New Task
          </button>
        </div>
      ) : (
        <NewTask />
      )}
    </div>
  );
};

export default Task;
