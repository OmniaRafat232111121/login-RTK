import React from "react";
import "./App.css";

import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import Logout from "./Component/Logout/Logout";
import Login from "./Component/Login/Login";

const App = () => {
  const user = useSelector((state)=>state.user.user);
  //console.log(user);

  return <div>{user ? <Logout/> : <Login/> }</div>;
};

export default App;