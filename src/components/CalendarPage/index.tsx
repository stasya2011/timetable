import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Button } from "antd";
import ModalComponent from "../ModalComponent";
import CalendarComponent from "../Calendar";
import {
  RootState,
  selectStateFromEventsSliceSelector,
  useAppDispatch,
} from "../../redux/store";
import { openModal, closeModal } from "../../redux/slice/modalSlice";
import { setValuesForGraph } from "../../redux/slice/chartSlice";
import { sortEventsByStatus } from "../../utils";

const CalendarPage = () => {
  const { isModalOpen } = useSelector((state: RootState) => state.modalWindow);
  const reduxState = useSelector((state: RootState) => state);
  const selectedData = selectStateFromEventsSliceSelector(reduxState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const dataset = sortEventsByStatus(selectedData);
    dispatch(setValuesForGraph(dataset));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedData]);

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
