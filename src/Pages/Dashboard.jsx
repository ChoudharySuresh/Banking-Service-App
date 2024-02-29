import { useEffect } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import CreateAccount from "./CreateAccount";
import AddBeneficiary from "./AddBeneficiary";
import { jwtDecode } from "jwt-decode";
import { useUser } from "../Context/UserContext";
import AccountDetails from "../Components/AccountDetails/AccountDetails";

const Dashboard = () => {
  const { updateUser } = useUser();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const decodedToken = jwtDecode(token);

      console.log(decodedToken);

      const userId = decodedToken.customerID;
      updateUser(userId);
      console.log("User ID:", userId);
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-grow ml-64 p-8">
          <AccountDetails />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
