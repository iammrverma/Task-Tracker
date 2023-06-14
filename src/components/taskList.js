import React, { useState, useEffect } from "react";
import { FaCheck, FaAngleDown, FaEdit, FaTrash } from "react-icons/fa";
import NewTask from "./newTask";

const TaskList = ({ onNext }) => {
  const [tasks, setTasks] = useState([]);
  const [expandedItemId, setExpandedItemId] = useState(null);

  const handleAddTaskClicked = (nextComponent) => {
    onNext(nextComponent);
  };

  const handleEdit = (task) => {
    onNext("NewTask", { existingTask: task });
  };

  const handleDelete = (nextComponent, taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    localStorage.setItem("taskCounter", JSON.stringify(updatedTasks.length));
    if (updatedTasks.length === 0) {
      onNext(nextComponent);
    }
    setTasks(updatedTasks);
  };

  const handleMarkDone = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          completed: true,
        };
      }
      return task;
    });

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

  const handleAngleDownClick = (taskId) => {
    setExpandedItemId(taskId === expandedItemId ? null : taskId);
  };

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  return (
    <div className="p-3" style={{ width: "36rem" }}>
      <div className="card p-2">
        <div className="accordion" id="accordionExample">
          {tasks.map((task) => (
            <div
              className={`accordion-item my-2 ${task.completed ? "completed" : ""}`}
              key={task.id}
            >
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
          ))}
        </div>
        <button className="btn btn-primary" onClick={() => handleAddTaskClicked("NewTask")}>
          New Task
        </button>
      </div>
    </div>
  );
};

export default TaskList;
