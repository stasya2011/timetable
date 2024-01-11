import { Badge, BadgeProps, Button, Select } from "antd";
import { IListData, IState } from "../../../redux/types";
import { useAppDispatch } from "../../../redux/store";
import {
  deleteEvent,
  deleteItem,
  toggleStatus,
} from "../../../redux/slice/eventsSlice";
import styles from "./taskItem.module.scss";

const TaskItem = ({ item, event }: { item: IListData; event: IState }) => {
  const dispatch = useAppDispatch();

  const deleteItemFromList = (item: IListData) => {
    if (event.listData.length) {
      dispatch(deleteItem({ eventId: event.eventId, itemId: item.id }));
    }

    dispatch(deleteEvent({ eventId: event.eventId }));
  };

  const handleChange = (value: string, id: string) => {
    dispatch(
      toggleStatus({ status: value, eventId: event.eventId, itemId: id })
    );
  };

  return (
    <li key={item.id}>
      <Badge status={item.type as BadgeProps["status"]} text={item.content} />
      <div className={styles.wrapper}>
        <Button
          onClick={() => {
            deleteItemFromList(item);
          }}
          shape="circle"
          className={styles.deleteBtn}
        >
          &#10007;
        </Button>

        <Select
          className={styles.selectors}
          defaultValue="success"
          style={{ width: 80 }}
          onChange={(e) => handleChange(e, item.id)}
          options={[
            { value: "success", label: "success" },
            { value: "processing", label: "processing" },
            { value: "default", label: "default" },
          ]}
        />
      </div>
    </li>
  );
};

export default TaskItem;
