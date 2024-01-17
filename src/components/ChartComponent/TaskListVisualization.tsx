import { IChart } from "../../redux/types";
import styles from "./chartComponent.module.scss";
import ListComponent from "./ListComponent";

const TaskListVisualization = ({ chartReducer }: { chartReducer: IChart }) => {
  return (
    <div className={styles.taskListVisualization}>
      <ListComponent atr={[styles.list, styles.toDoStatus]}>
        {chartReducer.data.todo.length ? (
          chartReducer.data.todo.map((element) => (
            <li className={styles["list-item"]}>{element.content}</li>
          ))
        ) : (
          <h3>You currently don't have any todo tasks.</h3>
        )}
      </ListComponent>
      <ListComponent atr={[styles.list, styles["processingStatus"]]}>
        {chartReducer.data.progress.length ? (
          chartReducer.data.progress.map((element) => (
            <li className={styles["list-item"]}>{element.content}</li>
          ))
        ) : (
          <h3>You currently have no tasks in progress.</h3>
        )}
      </ListComponent>
      <ListComponent atr={[styles.list, styles["doneStatus"]]}>
        {chartReducer.data.done.length ? (
          chartReducer.data.done.map((element) => (
            <li className={styles["list-item"]}>{element.content}</li>
          ))
        ) : (
          <h3>You currently have no completed tasks.</h3>
        )}
      </ListComponent>
    </div>
  );
};

export default TaskListVisualization;
