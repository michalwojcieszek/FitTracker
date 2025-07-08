"use client";
import FormWrapper from "../UI/Form/FormWrapper/FormWrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInput from "../UI/Form/Inputs/TextInput";
import {
  profileUpdateSchema,
  ProfileUpdateSchema,
} from "@/schemas/profileUpdateSchema";

type ProfileUpdateFormProps = {
  buttonText: string;
  onSubmit: (data: ProfileUpdateSchema) => void;
};

const ProfileUpdateForm = ({
  buttonText,
  onSubmit,
}: ProfileUpdateFormProps) => {
  const methods = useForm<ProfileUpdateSchema>({
    resolver: zodResolver(profileUpdateSchema),
    defaultValues: { name: "" },
  });
  return (
    <FormWrapper
      buttonText={buttonText}
      methods={methods}
      onSubmit={onSubmit}>
      <TextInput
        name="name"
        label="Name"
        placeholder="Enter your new name"
      />
      <TextInput
        name="height"
        label="Height"
        placeholder="Enter your new height in cm"
        type="number"
      />
    </FormWrapper>
  );
};

export default ProfileUpdateForm;
