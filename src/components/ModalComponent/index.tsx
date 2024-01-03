import { useSelector } from "react-redux";
import { Modal } from "antd";
import { RootState } from "../../redux/store";
import TaskList from "../TaskList";
import { formatDate } from "../../utils";
import TaskInputForm from "../TaskInputForm";

const ModalComponent = ({
  isOpen = false,
  onOk,
  onCancel,
}: {
  isOpen: boolean;
  onOk: () => void;
  onCancel: () => void;
}) => {
  const { events, selectedDate } = useSelector((state: RootState) => state);

  return (
    <Modal open={isOpen} onOk={onOk} onCancel={onCancel}>
      <TaskInputForm />

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
