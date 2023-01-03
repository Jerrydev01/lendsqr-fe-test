import React from "react";
import LoginCpn from "../components/Login/LoginCpn";

const Login = ({ login }: any) => {
  
  return (
    <main>
      <LoginCpn login={login} />
    </main>
  );
};

export default Login;
