/**
 * The Main component is responsible for rendering the current active component
 * based on the `currentComponent` state. It manages the component transition
 * and handles passing props between components.
 */
const Main = () => {
  // Retrieve the taskCounter value from local storage or set it to 0
  const taskCounter = JSON.parse(localStorage.getItem("taskCounter")) || 0;

  // Define the initial currentComponent state based on taskCounter
  const [currentComponent, setCurrentComponent] = useState(() => {
    return taskCounter === 0 ? "Empty" : "TaskList";
  });

  // Define a component map that maps component names to their corresponding components
  const componentMap = {
    Empty,
    Navbar,
    NewTask,
    TaskList
  };

  /**
   * Handle the transition to the next component.
   * @param {string} nextComponent - The name of the next component to render.
   * @param {object} props - Additional props to pass to the next component.
   */
  const handleNext = (nextComponent, props) => {
    setCurrentComponent(nextComponent);
    setComponentProps(props);
  };

  // Define the componentProps state to hold additional props for the current component
  const [componentProps, setComponentProps] = useState({});

  // Get the current component based on the currentComponent state
  const CurrentComponent = componentMap[currentComponent];

  return (
    <div>
      {/* Render the current component and pass componentProps and onNext callback */}
      {CurrentComponent && <CurrentComponent onNext={handleNext} {...componentProps} />}
    </div>
  );
};

export default Main;
