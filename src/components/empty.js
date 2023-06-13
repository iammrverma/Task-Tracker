import React, { useState } from "react";
import NewTask from "./newTask";

const Empty = () => {
    const [newTaskClicked, setNewTaskClicked] = useState(false);

    const handleNewTaskClick = () => {
        setNewTaskClicked(true);
    };

    return (
        <div>
            {!newTaskClicked ? (
                <div className="card text-center mb-3" >
                    <img src={process.env.PUBLIC_URL + "/notasks.gif"} className="card-img-top" alt="No Tasks" />
                    <div className="card-body">
                        <h5 className="card-title">No Tasks Added</h5>
                        <button className="btn btn-primary" onClick={handleNewTaskClick}>
                            New Task
                        </button>
                    </div>
                </div>
            ) : (
                <NewTask />
            )}
        </div>
    );
};

export default Empty;
