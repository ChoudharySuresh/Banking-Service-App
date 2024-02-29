import React from "react";
import { useUser } from "../Context/UserContext";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
const CreateAccount = () => {
  const { userId } = useUser();
  // console.log(userId);
  return <div></div>;
};

export default CreateAccount;
