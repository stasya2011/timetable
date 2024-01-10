import { useSelector } from "react-redux";
import { IListData, IState } from "../../redux/types";
import { RootState } from "../../redux/store";
import TaskItem from "./TakItem";
import classNames from "classnames";
import styles from "./taskList.module.scss";

const TaskList = ({ event }: { event: IState }) => {
  const { isModalOpen } = useSelector((state: RootState) => state.modalWindow);

  return (
    <ul
      className={classNames({
        [styles["listOfEvents"]]: !isModalOpen,
        [styles["listOfEventsWindowOpen"]]: isModalOpen,
      })}
    >
      {event.listData.map((item: IListData) => {
        return <TaskItem item={item} event={event} />;
      })}
    </ul>
  );
};

export default TaskList;
