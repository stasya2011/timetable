import { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Modal } from "antd";
import { RootState, useAppDispatch } from "../../redux/store";
import TaskList from "../TaskList";
import { formatDate } from "../../utils";
import { setInput } from "../../redux/slice/selectSlice";
import styles from "./modalComponent.module.scss";

const ModalComponent = ({
  isOpen = false,
  onOk,
  onCancel,
}: {
  isOpen: boolean;
  onOk: () => void;
  onCancel: () => void;
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const { events, selectedDate } = useSelector((state: RootState) => state);
  const dispatch = useAppDispatch();
  const setValue = () => {
    dispatch(setInput(inputValue));
    setInputValue("");
  };

  return (
    <Modal open={isOpen} onOk={onOk} onCancel={onCancel}>
      <div className={styles.wrapper}>
        <div>
          <input
            type="text"
            placeholder="Add event."
            value={inputValue}
            onChange={(e) => setInputValue(() => e.target.value)}
          />
          <Button onClick={setValue}>Add</Button>
        </div>
        <div className={styles.date}>
          {formatDate(selectedDate.selectedDate)}
        </div>
      </div>

      <>
        {events.map((event) => {
          if (
            formatDate(event.date) === formatDate(selectedDate.selectedDate)
          ) {
            return <TaskList event={event} key={event.date.millisecond()} />;
          } else {
            return null;
          }
        })}
      </>
    </Modal>
  );
};

export default ModalComponent;
