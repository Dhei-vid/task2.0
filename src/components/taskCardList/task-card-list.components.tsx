import TaskCard from "../taskCard/task-card.component";
import "./task-card-list.styles.scss";

const items = [
  { id: 1, checked: false, name: "Item 1" },
  { id: 2, checked: false, name: "Item 2" },
  { id: 3, checked: true, name: "Item 3" },
];

const TaskCardList = () => {
  return (
    <div className="taskCardListContainer">
      <div>
        {items.map((task) => {
          return (
            <TaskCard key={task.id} checked={task.checked} title={task.name} />
          );
        })}
      </div>
    </div>
  );
};

export default TaskCardList;
