import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./Action/userAction";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <Router>
      {isAuthenticated ? <Header /> : null}
      <Routes>
        <Route path="/" element={isAuthenticated ? <Home /> : <Login />} />
      </Routes>
    </Router>
  );
};

export default App;
