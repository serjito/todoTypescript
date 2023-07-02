import { useState } from "react";
import logo from "./assets/react.svg";
import { Task } from "./interfaces/Task";
import { TaskList } from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Learn React",
      description: "Learn Reactttt",
      completed: false,
    },
  ]);

  const getCureentTimestamp = (): number => new Date().getTime();

  const addANewTask = (task: Task) => {
    setTasks([
      ...tasks,
      { ...task, id: getCureentTimestamp(), completed: false },
    ]);
  };
  const deleteTask = (id: number) =>
    setTasks(tasks.filter((task) => task.id != id));

  return (
    <div className="bg-dark text-white" style={{ height: "100vh" }}>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={logo} style={{ width: "4rem" }} />
          </a>
        </div>
      </nav>

      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm addANewTask={addANewTask} />
          </div>
          <div className="col-md-8">
            <div className="row">
              <TaskList tasks={tasks} deleteTask={deleteTask} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
