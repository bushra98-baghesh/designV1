import React from "react";
import Header from "../../components/auth/Header";
import LoginComponent from "../../components/auth/LoginComponent";
function Login() {
  return (
    <div className="container  py-24 px-6 mx-auto items-center justify-center ">
      <Header
        heading="Login to your account"
        paragraph="Don't have an account yet? "
        linkName="Signup"
        linkUrl="/signup"
      />
      <LoginComponent />
    </div>
  );
}

export default Login;
