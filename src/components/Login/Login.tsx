"use  client";
import CustomCard from "../UI/Cards/CustomCard";
import LoginForm from "./LoginForm";

const Login = () => {
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <CustomCard
      title="Log in"
      subtitle="Enter you account to track your progress">
      <LoginForm
        buttonText="Log In"
        onSubmit={onSubmit}
      />
    </CustomCard>
  );
};

export default Login;
