import { useState, useEffect } from "react";
import TaskCard from "../taskCard/task-card.component";
import { ITask } from "../../common/types";
import { getAllTasks } from "../../firebase/task";
import "./task-card-list.styles.scss";
import { useNavigate } from "react-router-dom";

type AllTasks = {
  id: string;
} & ITask;

const TaskCardList = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState<AllTasks[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await getAllTasks();

      setTasks(data);
    };

    fetchTasks();
  }, []);

  const handleClick = (itemId: string) => {
    navigate(`/selectedTask/${itemId}`); // Navigate to '/items/:itemId'
  };

  return (
    <div className="taskCardListContainer">
      <div>
        {tasks.map((task) => {
          return (
            <TaskCard
              key={task.id}
              checked={task.checked}
              title={task.title}
              onClick={() => handleClick(task.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TaskCardList;
