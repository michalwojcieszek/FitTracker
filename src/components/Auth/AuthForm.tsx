"use client";

import FormWrapper from "../UI/Form/FormWrapper/FormWrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { authSchema, AuthSchema } from "@/schemas/authSchema";
import TextInput from "../UI/Form/Inputs/TextInput";

type AuthFormProps = {
  buttonText: string;
  onSubmit: (data: AuthSchema) => void;
};

const AuthForm = ({ buttonText, onSubmit }: AuthFormProps) => {
  const methods = useForm<AuthSchema>({
    resolver: zodResolver(authSchema),
    defaultValues: { email: "", password: "" },
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
        name="password"
        label="Password"
        placeholder="Enter your password"
        type="password"
      />
    </FormWrapper>
  );
};

export default AuthForm;
