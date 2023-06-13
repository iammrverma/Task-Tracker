import Task from "./task";

const TaskList = ({ onNext }) => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const handleAddTaskClicked = (nextComponent) => {
    onNext(nextComponent);
  };

  return (
    <div className="p-3" style={{ width: "36rem" }}>
      <div className="card p-2">
        <div className="accordion" id="accordionExample">
          {tasks.map((task) => (
            <Task taskId={task.id} taskTitle={task.title} taskDescription={task.description} taskCompleted={task.completed}/>    
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
