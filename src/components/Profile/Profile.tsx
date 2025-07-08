"use client";
import { useCallback, useState } from "react";
import CustomCard from "../UI/Cards/CustomCard";
import ProfileModal from "./ProfileModal";
import CustomButton from "../UI/Buttons/CustomButton";

const Profile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleModalOpen = useCallback(() => {
    setIsOpen((cur) => !cur);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <CustomCard
      title="My profile"
      subtitle="Here is your data">
      <CustomButton onClick={toggleModalOpen}>Update my profile</CustomButton>
      <ProfileModal
        handleClose={closeModal}
        isOpen={isOpen}
      />
    </CustomCard>
  );
};

export default Profile;
