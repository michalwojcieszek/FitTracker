"use client";
import CustomButton from "../UI/Buttons/CustomButton";
import CustomModal from "../UI/Modals/CustomModal";
import NewMetricsForm from "./NewMetricsForm";

type NewMetricsModalProps = {
  handleClose: () => void;
  isOpen: boolean;
};

const NewMetricsModal = ({ handleClose, isOpen }: NewMetricsModalProps) => {
  return (
    <CustomModal
      handleClose={handleClose}
      open={isOpen}
      title="Add your metrics"
      subtitle="Share your progress!">
      <NewMetricsForm
        buttonText="Add metrics"
        onSubmit={() => console.log("abc")}
      />
      <CustomButton
        onClick={handleClose}
        variant="outlined">
        Reject
      </CustomButton>
    </CustomModal>
  );
};

export default NewMetricsModal;
