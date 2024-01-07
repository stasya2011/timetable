import { Badge, BadgeProps, Button } from "antd";
import { IListData, IState } from "../../../redux/types";
import { useAppDispatch } from "../../../redux/store";
import { deleteEvent, deleteItem } from "../../../redux/slice/eventsSlice";
import styles from "./taskItem.module.scss";

const TaskItem = ({ item, event }: { item: IListData; event: IState }) => {
  const dispatch = useAppDispatch();

  const deleteItemFromList = (item: IListData) => {
    if (event.listData.length) {
      dispatch(deleteItem({ eventId: event.eventId, itemId: item.id }));
    }

    dispatch(deleteEvent({ eventId: event.eventId }));
  };

  return (
    <li key={item.id}>
      <Badge status={item.type as BadgeProps["status"]} text={item.content} />
      <Button
        onClick={() => {
          deleteItemFromList(item);
        }}
        shape="circle"
        className={styles.deleteBtn}
      >
        &#10007;
      </Button>
    </li>
  );
};

export default TaskItem;
