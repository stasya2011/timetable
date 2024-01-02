import { useState } from "react";
import { Button } from "antd";
import ModalComponent from "../ModalComponent";
import CalendarComponent from "../Calendar";
// import { useSelector } from "react-redux";
// import { RootState, useAppDispatch } from "../../redux/store";

const CalendarPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const { selectedDate } = useSelector((state: RootState) => state);
  // const dispatch = useAppDispatch();

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
