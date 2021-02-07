import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  // Toggle AddTask
  const toggleAddTask = () => {
    setShowAddTask(!showAddTask);
  };

  // Add Task
  const addTask = (task) => {
    const id = tasks.length + 1;
    const newTask = { id: id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => {
        return task.id === id
          ? { ...task, reminder: !task.reminder }
          : task;
      })
    );
  };

  return (
    <div className="container">
      <Header
        onShowAddTask={toggleAddTask}
        showAddTask={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
        />
      ) : (
        <h3 style={{ textAlign: "center" }}>
          No Tasks to do!!
        </h3>
      )}
    </div>
  );
}

export default App;
