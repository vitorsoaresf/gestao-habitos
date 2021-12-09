import { createContext, useState } from "react";
import api from "../../services/api";

export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);

  const getGroups = () => {
    api
      .get("/groups/")
      .then((response) => {
        setGroups(response.data.results);
      })
      .catch((err) => console.log(err));
  };

  return (
    <GroupsContext.Provider value={{ groups, getGroups }}>
      {children}
    </GroupsContext.Provider>
  );
};
