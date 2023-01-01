import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import logoImage from "../../assets/pablo-sign-in.svg";
import style from "./login.module.scss";
import { Link, useNavigate } from "react-router-dom";

// Cpn stands for component
const LoginCpn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  const navigator = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // navigate with router-dom
    navigator("/dashboard", { state: { from: "/login" } });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInput({
      ...loginInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section id={style.loginSec}>
      <article className={style.login}>
        <div className={style.login__logo}>
          <img src={logo} alt="logo" className="" />
        </div>
        <div className={style.login__formgroup}>
          <img src={logoImage} alt="login_image" className="" />
          <form
            onSubmit={(e) => handleSubmit(e)}
            action=""
            className={style.login__form}
          >
            <h3>Welcome!</h3>
            <p>Enter details to login.</p>
            <div className={style.form__group}>
              <input
                type="email"
                value={loginInput.email}
                onChange={handleChange}
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            {/* show and hide input password input*/}
            <div className={style.form__group}>
              <label onClick={handleShowPassword} htmlFor="password">
                {showPassword ? "Hide" : "Show"}
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={loginInput.password}
                onChange={handleChange}
                id="password"
                placeholder="Password"
                required
              />
            </div>
            <p className={style.login__fpassword}>Forgot PASSWORD?</p>
            <div className="login__btn">
              <button className=" btn__primary" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default LoginCpn;
