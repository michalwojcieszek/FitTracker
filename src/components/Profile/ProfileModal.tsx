"use client";
import CustomButton from "../UI/Buttons/CustomButton";
import ProfileUpdateForm from "./ProfileUpdateForm";
import CustomModal from "../UI/Modals/CustomModal";

type ProfileModalProps = {
  handleClose: () => void;
  isOpen: boolean;
};

const ProfileModal = ({ handleClose, isOpen }: ProfileModalProps) => {
  return (
    <CustomModal
      handleClose={handleClose}
      open={isOpen}
      title="Change personal data"
      subtitle="Here you can change your name or height">
      <ProfileUpdateForm
        buttonText="Update profile"
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

export default ProfileModal;
