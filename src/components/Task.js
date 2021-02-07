import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  const { text, day, reminder } = task;
  return (
    <div
      className={`task ${reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {text}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{day}</p>
    </div>
  );
};

export default Task;
