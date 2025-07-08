"use client";
import FormWrapper from "../UI/Form/FormWrapper/FormWrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInput from "../UI/Form/Inputs/TextInput";
import { loginSchema, LoginSchema } from "@/schemas/loginSchema";

type LoginFormProps = {
  buttonText: string;
  onSubmit: (data: LoginSchema) => void;
};

const LoginForm = ({ buttonText, onSubmit }: LoginFormProps) => {
  const methods = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
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

export default LoginForm;
