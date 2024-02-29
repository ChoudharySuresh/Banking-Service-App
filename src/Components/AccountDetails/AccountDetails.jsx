import { useEffect } from "react";
import Card from "./Card";
import { useUser } from "../../Context/UserContext";
import axios from "axios";

const AccountDetails = () => {
  const { userId } = useUser();
  const token = localStorage.getItem("token");
  console.log(token);
  console.log(userId);

  useEffect(async () => {
    try {
      const response = await axios.get(
        `https://571f-2601-646-8b82-6960-dda3-8c5d-b539-617c.ngrok-free.app/api/customer/482/account/`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJjdXN0b21lcklEIjo0ODIsInN1YiI6ImFkbWluIiwiaWF0IjoxNzA5MjExODY5LCJleHAiOjE3MDkyMTM2Njl9.zLFGze3WovnSV7UzaS1kXfHEFgLhZ8Xa5SAbipYcthA",
          },
        }
      );
      const data = await response.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <h1>Account default</h1>
      <Card />
    </div>
  );
};

export default AccountDetails;
