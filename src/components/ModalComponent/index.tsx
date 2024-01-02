import { Modal } from "antd";

const ModalComponent = ({
  isOpen = false,
  onOk,
  onCancel,
}: {
  isOpen: boolean;
  onOk: () => void;
  onCancel: () => void;
}) => {
  return (
    <Modal open={isOpen} onOk={onOk} onCancel={onCancel}>
      <input type="text" />
    </Modal>
  );
};

export default ModalComponent;
