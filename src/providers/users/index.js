import { createContext, useState } from "react";
import api from "../../services/api";
import { toast } from "react-hot-toast";
import jwt_decode from "jwt-decode";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  const registerUser = async (data) => {
    delete data.confirm_password;

    await api
      .post("/users/", data)
      .then((_) => {
        toast.success("registered user!");
      })
      .catch((_) => toast.error("some error occurred"));
  };

  const getSpecificUser = (userId) => {
    api
      .get(`/users/${userId}/`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => console.log(err));
  };

  const getAllUsers = () => {
    api
      .get("/users/")
      .catch((err) => console.log(err));
  };

  const updateUser = (token, data) => {
    const { user_id } = jwt_decode(token);

    api
      .patch(`/users/${user_id}/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        toast.success("user updated successfully");
      })
      .catch((err) => {
        console.log(err);
        toast.error("some error on the server");
      });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        registerUser,
        getSpecificUser,
        getAllUsers,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
