import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import { Button } from "antd";
import { formatDate } from "../../utils";
import { setInput } from "../../redux/slice/selectSlice";
import styles from "./taskInputForm.module.scss";

const TaskInputForm = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const { selectedDate } = useSelector((state: RootState) => state);
  const dispatch = useAppDispatch();
  const setValue = () => {
    dispatch(setInput(inputValue));
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
