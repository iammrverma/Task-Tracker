import React from "react";

const Empty = ({ onNext }) => {
  const handleNewTaskClick = (nextComponent) => {
    onNext(nextComponent);
  };

  return (
    <div className="card text-center mb-3">
      <img src={process.env.PUBLIC_URL + "/notasks.gif"} className="card-img-top" alt="No Tasks" />
      <div className="card-body">
        <h5 className="card-title">No Tasks Added</h5>
        <button className="btn btn-primary" onClick={() => handleNewTaskClick("NewTask")}>
          New Task
        </button>
      </div>
    </div>
  );
};

export default Empty;
