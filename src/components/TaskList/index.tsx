import { Badge, BadgeProps } from "antd";
import { IListData, IState } from "../../redux/types";
import styles from "./taskList.module.scss";

const TaskList = ({ event }: { event: IState }) => {
  return (
    <ul className={styles["listOfEvents"]}>
      {event.listData.map((item: IListData) => {
        //console.log("+++ / event / +++", event);
        return (
          <li key={item.id}>
            <Badge
              status={item.type as BadgeProps["status"]}
              text={item.content}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
