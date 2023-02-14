import React from "react";
import Header from "../../components/auth/Header";
import SignupComponent from "../../components/auth/SignupComponent";

function SignUp() {
  return (
    <div className="container  py-24 px-6 mx-auto items-center justify-center">
      <Header
        heading="Signup to create an account"
        paragraph="Already have an account? "
        linkName="Login"
        linkUrl="/"
      />
      <SignupComponent />
    </div>
  );
}

export default SignUp;
