import { useSelector } from "react-redux";
import { Button } from "antd";
import ModalComponent from "../ModalComponent";
import CalendarComponent from "../Calendar";
import { RootState, useAppDispatch } from "../../redux/store";
import { openModal, closeModal } from "../../redux/slice/modalSlice";
const CalendarPage = () => {
  const { isModalOpen } = useSelector((state: RootState) => state.modalWindow);
  const dispatch = useAppDispatch();

  const showModal = () => {
    dispatch(openModal());
  };
  const handleOk = () => {
    dispatch(closeModal());
  };
  const handleCancel = () => {
    dispatch(closeModal());
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
