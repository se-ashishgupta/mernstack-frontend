import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../Action/userAction";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form className="loginForm" onSubmit={loginHandler}>
        <label htmlFor="email">EMAIL</label>
        <input
          type="text"
          id="email"
          className="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="password">EMAIL</label>
        <input
          type="password"
          id="password"
          className="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
