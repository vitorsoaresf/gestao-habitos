import { createContext, useState } from "react";
import api from "../../services/api";
import jwt_decode from "jwt-decode";

export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const token = JSON.parse(localStorage.getItem("@Anima/token"));

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

  const [groupParticipants, setGroupParticipants] = useState([]);
  const getGroupAllParticipants = (groupId) => {
    api
      .get(`/groups/${groupId}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setGroupParticipants(response.data.users_on_group);
      })
      .catch((err) => console.log(err));
  };

  const [groupGoals, setGroupGoals] = useState([]);
  const getGoalsGroup = (groupId) => {
    api
      .get(`/goals/?group=${groupId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setGroupGoals(response.data.results);
      })
      .catch((err) => console.log(err));
  };

  const createGoalsGroup = (data) => {
    api
      .post(`/goals/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  const [groupActivities, setGroupActivities] = useState([]);
  const getActivitiesGroup = (groupId) => {
    api
      .get(`/activities/?group=${groupId}`)
      .then((response) => {
        setGroupActivities(response.data.results);
      })
      .catch((err) => console.log(err));
  };

  const createActivitiesGroup = (data) => {
    api
      .post(`/activities/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  const createGroup = (token, data) => {
    api
      .post("/groups/", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  const updateGroup = (token, groupId, data) => {
    api
      .patch(`/groups/${groupId}/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  const inscribeGroup = (token, groupId) => {
    api
      .post(`/groups/${groupId}/subscribe/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  const unsubscribeGroup = (token, groupId) => {
    api
      .post(`/groups/${groupId}/unsubscribe/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  return (
    <GroupsContext.Provider
      value={{
        groups,
        groupParticipants,
        groupGoals,
        groupActivities,
        getAllGroups,
        getGroupsUser,
        getGroupAllParticipants,
        getGoalsGroup,
        createGoalsGroup,
        getActivitiesGroup,
        createActivitiesGroup,
        createGroup,
        updateGroup,
        inscribeGroup,
        unsubscribeGroup,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};
