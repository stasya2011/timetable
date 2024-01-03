import { useState } from "react";
import { Button } from "antd";
import ModalComponent from "../ModalComponent";
import CalendarComponent from "../Calendar";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import { setSelectedDate } from "../../redux/slice/selectSlice";
import { addNewDateAndEvent } from "../../redux/slice/eventsSlice";

const CalendarPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { selectedDate } = useSelector((state: RootState) => state);
  const dispatch = useAppDispatch();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    if (selectedDate.input) {
      dispatch(
        addNewDateAndEvent({
          input: selectedDate.input,
          date: selectedDate.selectedDate,
        })
      );
    }
    dispatch(setSelectedDate(selectedDate.selectedDate));
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <ModalComponent
        isOpen={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      />
      <CalendarComponent />
      <Button type="primary" onClick={showModal}>
        Add event
      </Button>
    </div>
  );
};

export default CalendarPage;
