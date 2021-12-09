import { createContext, useState } from "react";
import api from "../../services/api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  const login = (data) => {
    api
      .get(`/sessions/`, data)
      .then((response) => {
        localStorage.setItem(`@Anima/token:${JSON.stringify(response.access)}`);
      })
      .catch((err) => console.log(err));
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
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  );
};
