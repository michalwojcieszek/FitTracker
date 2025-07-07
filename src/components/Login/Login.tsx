"use  client";
import AuthForm from "../Auth/AuthForm";
import CustomCard from "../UI/Cards/CustomCard";

const Login = () => {
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <CustomCard
      title="Log in"
      subtitle="Enter you account to track your progress">
      <AuthForm
        buttonText="Log In"
        onSubmit={onSubmit}
      />
    </CustomCard>
  );
};

export default Login;
