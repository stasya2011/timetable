import { Modal } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import TaskList from "../TaskList";

const ModalComponent = ({
  isOpen = false,
  onOk,
  onCancel,
}: {
  isOpen: boolean;
  onOk: () => void;
  onCancel: () => void;
}) => {
  const { events } = useSelector((state: RootState) => state);
  return (
    <Modal open={isOpen} onOk={onOk} onCancel={onCancel}>
      <input type="text" />
      <>
        {events.map((event) => (
          <TaskList event={event} />
        ))}
      </>
    </Modal>
  );
};

export default ModalComponent;
