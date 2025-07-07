"use  client";
import AuthForm from "../Auth/AuthForm";
import CustomCard from "../UI/Cards/CustomCard";

const Signup = () => {
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <CustomCard
      title="Sign Up"
      subtitle="Create an account to track your progress">
      <AuthForm
        buttonText="Sign Up"
        onSubmit={onSubmit}
      />
    </CustomCard>
  );
};

export default Signup;
