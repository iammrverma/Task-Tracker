import React, { useState, useEffect } from "react";
import Task from "./task";
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
    setExpandedItemId((prevExpandedItemId) => (prevExpandedItemId === taskId ? null : taskId));
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
            <Task
              key={task.id}
              task={task}
              expandedItemId={expandedItemId}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              handleMarkDone={handleMarkDone}
              handleAngleDownClick={handleAngleDownClick}
            />
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
