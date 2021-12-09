import { createContext, useState } from "react";
import api from "../../services/api";

export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);

  const getAllGroups = () => {
    api
      .get("/groups/")
      .then((response) => {
        setGroups(response.data.results);
      })
      .catch((err) => console.log(err));
  };

  const getGroupsUser = (token) => {
    api
      .get("/groups/subscriptions/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  const getGoalsGroup = (groupId, token) => {
    api
      .get(`/goals/?group=${groupId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response.data.results);
      })
      .catch((err) => console.log(err));
  };

  const getActivitiesGroup = (groupId) => {
    api
      .get(`/activities/?group=${groupId}`)
      .then((response) => {
        console.log(response.data.results);
      })
      .catch((err) => console.log(err));
  };

  return (
    <GroupsContext.Provider
      value={{
        groups,
        getAllGroups,
        getGroupsUser,
        getGoalsGroup,
        getActivitiesGroup,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};
