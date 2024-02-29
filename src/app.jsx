import Login from "./Components/Login/Login";
import { Routes, Route } from "react-router-dom";
import Register from "./Components/Register/Register";
import Dashboard from "./Pages/Dashboard";
import { UserProvider } from "./Context/UserContext";
import CreateAccount from "./Pages/CreateAccount";
import AddBeneficiary from "./Pages/AddBeneficiary";

export function App() {
  return (
    <>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route
              path="/dashboard/create-account"
              element={<CreateAccount />}
            ></Route>
            <Route
              path="/dashboard/add-beneficiary"
              element={<AddBeneficiary />}
            ></Route>
          </Route>
        </Routes>
      </UserProvider>
    </>
  );
}
