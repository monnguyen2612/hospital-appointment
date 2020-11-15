import React from "react";
import "./index.css";

const LoginComponent = () => {
  return (
    <div>
      <div className="backgroundLogin"> </div>
      <div className="LoginBox">
        <form>
          <div className="UserLogin">
            <label htmlFor="userName" className="control-Element">
              Email
            </label>
            <input
              type="email"
              className="login-control-1"
              id="userName"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="UserLogin">
            <label htmlFor="userpassword" className="control-Element">
              Mật khẩu
            </label>
            <input
              type="password"
              className="login-control-1"
              id="userpassword"
            />
          </div>
          <input type="submit" className="submitLogin" value="Login" />
          <div className="Login-forgetRegister">
            <a className="registerUser" href="register">
              Tạo tài khoản
            </a>
            <a className="forgetPassword float-right" href="/">
              Quên mật khẩu ?
            </a>
          </div>
          <a className="returnHome" href="/">
            Về trang chủ
          </a>
        </form>
        <div className="clear" />
      </div>
    </div>
  );
};

export default LoginComponent;
