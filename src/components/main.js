import React, { useState } from "react";
import Empty from "./empty";
import Navbar from "./navbar";
import NewTask from "./newTask";
import TaskList from "./taskList";


const taskCounter = JSON.parse(localStorage.getItem("taskCounter")) || 0;

const Main = () => {
  const [currentComponent, setCurrentComponent] = useState(()=>{
    return taskCounter === 0? "Empty":"TaskList";
  });

  const componentMap = {
    Empty,
    Navbar,
    NewTask,
    TaskList
  };

  const handleNext = (nextComponent) => {
    setCurrentComponent(nextComponent);
  };

  const CurrentComponent = componentMap[currentComponent];

  return (
    <div>
      {CurrentComponent && <CurrentComponent onNext={handleNext}/>}
    </div>
  );
};

export default Main;
