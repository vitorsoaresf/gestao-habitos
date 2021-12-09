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

  const registerUser = async (data) => {
    delete data.confirm_password;

    await api
      .post("/users/", data)
      .then((response) => {
        console.log(response);
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
    <UserContext.Provider value={{ user, login, registerUser }}>
      {children}
    </UserContext.Provider>
  );
};
