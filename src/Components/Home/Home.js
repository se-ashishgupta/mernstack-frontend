import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../Action/userAction";

const Home = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logoutUser());
  };
  return (
    <div className="home">
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default Home;
