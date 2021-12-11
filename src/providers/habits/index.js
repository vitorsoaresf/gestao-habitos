import { createContext, useState } from "react";
import api from "../../services/api";
import jwt_decode from "jwt-decode";

export const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const createHabit = (token, data) => {
    const { user_id } = jwt_decode(token);
    data.user = user_id;

    api
      .post("/habits/", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  const [allHabits, setAllHabits] = useState([]);

  const getHabits = (token) => {
    api
      .get("/habits/personal/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        setAllHabits(response.data);
      })
      .catch((err) => console.log(err));
  };

  const updateHabit = (token, data, habitId) => {
    console.log("fui chamado para atulaizar");
    api
      .patch(`/habits/${habitId}/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  const deleteHabit = (token, habitId) => {
    api
      .delete(`/habits/${habitId}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  return (
    <HabitsContext.Provider
      value={{ allHabits, createHabit, getHabits, updateHabit, deleteHabit }}
    >
      {children}
    </HabitsContext.Provider>
  );
};
