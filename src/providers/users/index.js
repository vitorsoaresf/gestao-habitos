import { createContext, useState } from "react";
import api from "../../services/api";
import { toast } from "react-hot-toast";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  const login = (data) => {
    api
      .get(`/sessions/`, data)
      .then((response) => {
        localStorage.setItem("@Anima/token", JSON.stringify(response.access));
      })
      .catch((err) => console.log(err));
  };

  const register = (data) => {
    api
      .get(`/users/`, data)
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

  return (
    <UserContext.Provider value={{ user, login, register }}>
      {children}
    </UserContext.Provider>
  );
};
