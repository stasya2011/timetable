import { useSelector } from "react-redux";
import { IListData, IState } from "../../redux/types";
import { RootState } from "../../redux/store";
import TaskItem from "./TakItem";
import classNames from "classnames";
import styles from "./taskList.module.scss";

const TaskList = ({ event }: { event: IState }) => {
  const { isModalOpen } = useSelector((state: RootState) => state.modalWindow);

  return (
    <div className={styles.listWrapper}>
      <ul
        className={classNames({
          [styles["listOfEvents"]]: !isModalOpen,
          [styles["listOfEventsWindowOpen"]]: isModalOpen,
          [styles["borderOfList"]]:
            isModalOpen &&
            event.listData.findIndex((task) => task.type === "success") > -1,
          [styles["toDoStatus"]]:
            isModalOpen &&
            event.listData.findIndex((task) => task.type === "success") > -1,
        })}
      >
        {event.listData.map((item: IListData) => {
          if (item.type === "success") {
            return <TaskItem item={item} event={event} />;
          }
          return null;
        })}
      </ul>

      <ul
        className={classNames({
          [styles["listOfEvents"]]: !isModalOpen,
          [styles["listOfEventsWindowOpen"]]: isModalOpen,
          [styles["borderOfList"]]:
            isModalOpen &&
            event.listData.findIndex((task) => task.type === "processing") > -1,
          [styles["processingStatus"]]:
            isModalOpen &&
            event.listData.findIndex((task) => task.type === "processing") > -1,
        })}
      >
        {event.listData.map((item: IListData) => {
          return item.type === "processing" ? (
            <TaskItem item={item} event={event} />
          ) : null;
        })}
      </ul>
      <ul
        className={classNames({
          [styles["listOfEvents"]]: !isModalOpen,
          [styles["listOfEventsWindowOpen"]]: isModalOpen,
          [styles["borderOfList"]]:
            isModalOpen &&
            event.listData.findIndex((task) => task.type === "default") > -1,
          [styles["doneStatus"]]:
            isModalOpen &&
            event.listData.findIndex((task) => task.type === "default") > -1,
        })}
      >
        {event.listData.map((item: IListData) => {
          if (item.type === "default") {
            return <TaskItem item={item} event={event} />;
          }
          return null;
        })}
      </ul>
    </div>
  );
};

export default TaskList;
