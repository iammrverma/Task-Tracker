import React from "react";
import { FaCheck, FaAngleDown, FaEdit, FaTrash } from "react-icons/fa";

const Task = ({ task, expandedItemId, handleEdit, handleDelete, handleMarkDone, handleAngleDownClick }) => {
  return (
    <div className={`accordion-item my-2 ${task.completed ? "completed" : ""}`} key={task.id}>
      <h2 className="accordion-header">
        <div className="icons-container">
          <FaEdit className="icon" onClick={() => handleEdit(task)} />
          <FaTrash className="icon" onClick={() => handleDelete("Empty", task.id)} />
          <FaCheck className="icon" onClick={() => handleMarkDone(task.id)} />
          <FaAngleDown
            className={`icon ${expandedItemId === task.id ? "active" : ""}`}
            onClick={() => handleAngleDownClick(task.id)}
          />
        </div>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${task.id}`}
          aria-expanded={expandedItemId === task.id ? "true" : "false"}
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
  );
};

export default Task;
