"use client";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type CloseModalButtonProps = {
  handleClose: () => void;
};

const CloseModalButton = ({ handleClose }: CloseModalButtonProps) => {
  return (
    <IconButton
      onClick={handleClose}
      sx={{
        position: "absolute",
        top: 8,
        right: 8,
        color: "grey.500",
      }}
      aria-label="close">
      <CloseIcon />
    </IconButton>
  );
};

export default CloseModalButton;
