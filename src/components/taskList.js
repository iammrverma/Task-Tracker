import React, { useState, useEffect } from "react";
import Task from "./task";

const TaskList = ({ onNext }) => {
  const [tasks, setTasks] = useState([]);
  const [expandedItemId, setExpandedItemId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

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
    setExpandedItemId((prevId) => (prevId === taskId ? null : taskId));
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  const filteredTasks = tasks.filter((task) => {
    const taskText = `${task.title} ${task.description}`.toLowerCase();
    return taskText.includes(searchQuery.toLowerCase());
  });

  return (
    <div className="p-3" style={{ width: "36rem" }}>
      <div className="card p-2">
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Search tasks"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <div className="accordion" id="accordionExample">
          {filteredTasks
            .filter((task) => !task.completed) // Filter incomplete tasks
            .map((task) => (
              <Task
                key={task.id}
                task={task}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                handleMarkDone={handleMarkDone}
                handleAngleDownClick={handleAngleDownClick}
                expandedItemId={expandedItemId}
              />
            ))}
          {filteredTasks
            .filter((task) => task.completed) // Filter completed tasks
            .map((task) => (
              <Task
                key={task.id}
                task={task}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                handleMarkDone={handleMarkDone}
                handleAngleDownClick={handleAngleDownClick}
                expandedItemId={expandedItemId}
              />
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
