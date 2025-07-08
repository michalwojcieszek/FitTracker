"use client";

import FormWrapper from "../UI/Form/FormWrapper/FormWrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInput from "../UI/Form/Inputs/TextInput";
import { signupSchema, SignupSchema } from "@/schemas/signupSchema";

type SignupFormProps = {
  buttonText: string;
  onSubmit: (data: SignupSchema) => void;
};

const SignupForm = ({ buttonText, onSubmit }: SignupFormProps) => {
  const methods = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
    defaultValues: { email: "", password: "", name: "" },
  });
  return (
    <FormWrapper
      buttonText={buttonText}
      methods={methods}
      onSubmit={onSubmit}>
      <TextInput
        name="email"
        label="Email"
        placeholder="Enter your email"
      />
      <TextInput
        name="name"
        label="Name"
        placeholder="Enter your name"
      />
      <TextInput
        name="password"
        label="Password"
        placeholder="Enter your password"
        type="password"
      />
      <TextInput
        name="height"
        label="Height"
        placeholder="Enter your height in cm"
        type="number"
      />
    </FormWrapper>
  );
};

export default SignupForm;
