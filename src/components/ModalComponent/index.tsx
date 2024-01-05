import { useSelector } from "react-redux";
import { Modal } from "antd";
import { RootState } from "../../redux/store";
import { formatDate } from "../../utils";
import TaskList from "../TaskList";
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
    <Modal open={isOpen} onOk={onOk} onCancel={onCancel} width={1000}>
      <TaskInputForm />

      <>
        {events.map((event) => {
          if (event.eventId === formatDate(selectedDate.selectedDate)) {
            return <TaskList event={event} key={event.date.millisecond()} />;
          }
          return null;
        })}
      </>
    </Modal>
  );
};

export default ModalComponent;
