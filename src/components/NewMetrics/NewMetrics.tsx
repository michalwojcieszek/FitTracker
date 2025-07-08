"use client";
import { useCallback, useState } from "react";
import CustomButton from "../UI/Buttons/CustomButton";
import NewMetricsModal from "./NewMetricsModal";

type NewMetricsProps = {
  text: string;
  buttonVariant?: "outlined" | "contained" | "text";
};

const NewMetrics = ({ text, buttonVariant = "contained" }: NewMetricsProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleModalOpen = useCallback(() => {
    setIsOpen((cur) => !cur);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <CustomButton
        onClick={toggleModalOpen}
        variant={buttonVariant}
        sx={{ backgroundColor: "white" }}>
        {text}
      </CustomButton>
      <NewMetricsModal
        handleClose={closeModal}
        isOpen={isOpen}
      />
    </>
  );
};

export default NewMetrics;
