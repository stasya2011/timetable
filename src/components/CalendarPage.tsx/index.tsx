import { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "antd";
import { RootState, useAppDispatch } from "../../redux/store";
import { setSelectedDate } from "../../redux/slice/selectSlice";
import { addNewDateAndEvent } from "../../redux/slice/eventsSlice";
import ModalComponent from "../ModalComponent";
import CalendarComponent from "../Calendar";

const CalendarPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { selectedDate } = useSelector((state: RootState) => state);
  const dispatch = useAppDispatch();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
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
