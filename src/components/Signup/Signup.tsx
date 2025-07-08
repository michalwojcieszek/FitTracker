"use  client";
import CustomCard from "../UI/Cards/CustomCard";
import SignupForm from "./SignupForm";

const Signup = () => {
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <CustomCard
      title="Sign Up"
      subtitle="Create an account to track your progress">
      <SignupForm
        buttonText="Sign Up"
        onSubmit={onSubmit}
      />
    </CustomCard>
  );
};

export default Signup;
