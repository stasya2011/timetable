import { Badge, BadgeProps, Button } from "antd";
import { IListData, IState } from "../../redux/types";
import styles from "./taskList.module.scss";

const TaskList = ({ event }: { event: IState }) => {
  return (
    <ul className={styles["listOfEvents"]}>
      {event.listData.map((item: IListData) => {
        return (
          <li key={item.id}>
            <Badge
              status={item.type as BadgeProps["status"]}
              text={item.content}
            />
            <Button
              onClick={() => console.log("+++ itemId", item.id)}
              shape="circle"
              className={styles.deleteBtn}
            >
              &#10007;
            </Button>
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
