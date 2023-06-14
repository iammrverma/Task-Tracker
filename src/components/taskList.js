import React, { useState } from "react";
import { FaCheck, FaAngleDown, FaEdit, FaTrash } from "react-icons/fa";

const TaskList = ({ onNext }) => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const handleAddTaskClicked = (nextComponent) => {
    onNext(nextComponent);
  };
  const [expandedItemId, setExpandedItemId] = useState(null);

  const handleEdit = (taskId) => { };
  const handleDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    localStorage.setItem("taskCounter", JSON.stringify(updatedTasks.length));
    window.reload();
  };
  const handleMarkDone = (taskId) => { };
  const handleAngleDownClick = (taskId) => {
    setExpandedItemId(taskId === expandedItemId ? null : taskId);
  };

  return (
    <div className="p-3" style={{ width: "36rem" }}>
      <div className="card p-2">
        <div className="accordion" id="accordionExample">
          {tasks.map((task) => (
            <div className="accordion-item my-2" key={task.id}>
              <h2 className="accordion-header">
                <div className="icons-container">
                  <FaEdit className="icon" onClick={() => handleEdit(task.id)} />
                  <FaTrash className="icon" onClick={() => handleDelete(task.id)} />
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
                className={`accordion-collapse collapse ${expandedItemId === task.id ? "show" : ""
                  }`}
                aria-labelledby={`heading${task.id}`}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">{task.description}</div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="btn btn-primary"
          onClick={() => handleAddTaskClicked("NewTask")}
        >
          New Task
        </button>
      </div>
    </div>
  );
};

export default TaskList;
