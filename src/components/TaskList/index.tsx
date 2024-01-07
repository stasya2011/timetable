import TaskItem from "./TakItem";
import { IListData, IState } from "../../redux/types";
import styles from "./taskList.module.scss";

const TaskList = ({ event }: { event: IState }) => {
  return (
    <ul className={styles["listOfEvents"]}>
      {event.listData.map((item: IListData) => {
        return <TaskItem item={item} event={event} />;
      })}
    </ul>
  );
};

export default TaskList;
