import { Modal } from "@material-ui/core";
import { ReactElement, ReactNode } from "react";

type BaseModalProps = {
  children: ReactElement;
  open: boolean;
  handleClose: () => void;
};
const BaseModal = ({ children, open, handleClose }: BaseModalProps) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      style={{
        width: "100%",
        height: "60vh",
        marginTop: "200px",
        border: "none",
        outline: 0,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      {children}
    </Modal>
  );
};

export default BaseModal;
