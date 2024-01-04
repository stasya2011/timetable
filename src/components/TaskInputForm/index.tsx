import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import { Button } from "antd";
import { formatDate } from "../../utils";
import { setInput } from "../../redux/slice/selectSlice";
import {
  addNewDateAndEvent,
  updateEventForExistingDate,
} from "../../redux/slice/eventsSlice";
import styles from "./taskInputForm.module.scss";

const TaskInputForm = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const { selectedDate, events } = useSelector((state: RootState) => state);
  const dispatch = useAppDispatch();

  const setValue = () => {
    dispatch(setInput(inputValue));

    const existingEvent = events.find(
      (event) => event.eventId === formatDate(selectedDate.selectedDate)
    );
    if (existingEvent) {
      dispatch(
        updateEventForExistingDate({
          input: inputValue,
          eventId: existingEvent.eventId,
        })
      );
    } else {
      dispatch(
        addNewDateAndEvent({
          input: inputValue,
          date: selectedDate.selectedDate,
        })
      );
    }

    // dispatch(setSelectedDate(selectedDate.selectedDate));
    setInputValue("");
  };

  return (
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
      <div className={styles.date}>{formatDate(selectedDate.selectedDate)}</div>
    </div>
  );
};

export default TaskInputForm;
