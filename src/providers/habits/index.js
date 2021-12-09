import { createContext, useState } from "react";
import api from "../../services/api";

export const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);

  const getHabits = (token) => {
    api
      .get("/habits/personal/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setHabits(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <HabitsContext.Provider value={{ habits, getHabits }}>
      {children}
    </HabitsContext.Provider>
  );
};
