"use client";
import { ReactNode } from "react";
import { Modal, Stack } from "@mui/material";
import CustomCard from "../Cards/CustomCard";
import CloseModalButton from "./ModalElements/CloseModalButton";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  p: 3,
  maxHeight: "90vh",
  overflow: "hidden",
};

type CustomModalProps = {
  open: boolean;
  handleClose: () => void;
  title: string;
  subtitle: string;
  children: ReactNode;
};

const CustomModal = ({
  open,
  handleClose,
  title,
  subtitle,
  children,
}: CustomModalProps) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}>
      <CustomCard
        title={title}
        subtitle={subtitle}
        sx={modalStyle}>
        <CloseModalButton handleClose={handleClose} />
        <Stack
          sx={{
            maxHeight: "60vh",
            overflowY: "auto",
            py: 1,
          }}
          gap={3}>
          {children}
        </Stack>
      </CustomCard>
    </Modal>
  );
};

export default CustomModal;
