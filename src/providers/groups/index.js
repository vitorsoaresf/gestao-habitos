import { createContext, useEffect, useState } from "react";
import api from "../../services/api";
import jwt_decode from "jwt-decode";
import { toast } from "react-hot-toast";

export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("@Anima/token"));

  const [groups, setGroups] = useState([]);
  const [next, setNext] = useState(
    "https://kenzie-habits.herokuapp.com/groups/"
  );

  //Loads all the groups
  useEffect(() => {
    api
      .get(next)
      .then((response) => {
        if (next) {
          setGroups([...groups, ...response.data.results]);
          setNext(response.data.next);
        }
      })
      .catch((err) => console.log(err));
  }, [next]);

  const getFilteredGroups = (filter) => {
    if (filter) {
      api
        .get(`/groups/?search=${filter}`)
        .then((response) => {
          setGroups(response.data.results);
        })
        .catch((err) => console.log(err));
    } else {
      setNext("https://kenzie-habits.herokuapp.com/groups/");
    }
  };

  const [myGroups, setMyGroups] = useState([]);

  const getGroupsUser = (token) => {
    api
      .get("/groups/subscriptions/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setMyGroups(response.data);
      })
      .catch((err) => console.log(err));
  };

  const [groupParticipants, setGroupParticipants] = useState([]);
  const [groupCreator, setGroupCreator] = useState(false);
  const [dataGroup, setSpecificGroup] = useState([]);
  const [isParticipant, setIsParticipant] = useState(false);

  const getGroupAllParticipants = (groupId) => {
    const { user_id } = jwt_decode(token);
    setIsParticipant(false);
    api
      .get(`/groups/${groupId}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setGroupParticipants(response.data.users_on_group);
        setSpecificGroup(response.data);

        if (user_id === response.data.creator.id) {
          setGroupCreator(response.data.creator);
        }

        if (
          response.data.users_on_group.find(
            (participant) => participant.id === user_id
          )
        ) {
          setIsParticipant(true);
        }
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

  const createGoalsGroup = (groupId, data) => {
    api
      .post(`/goals/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        toast.success("goal created successfully");
      })
      .catch((err) => {
        console.log(err);
        toast.error("some error on the server");
      });

    getGoalsGroup(groupId);
  };

  const updateGoalsGroup = async (goalId, data) => {
    await api
      .patch(`/goals/${goalId}/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => toast.success("goal updated successfully"))
      .catch((err) => {
        console.log(err);
        toast.error("some error on the server");
      });
  };

  const deleteGoalsGroup = async (goalId) => {
    await api
      .delete(`/goals/${goalId}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => toast.success("goal deleted successfully"))
      .catch((err) => {
        console.log(err);
        toast.error("some error on the server");
      });
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

  const createActivitiesGroup = (groupId, data) => {
    api
      .post(`/activities/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => toast.success("activity created successfully"))
      .catch((err) => {
        console.log(err);
        toast.error("some error on the server");
      });

    getActivitiesGroup(groupId);
  };

  const updateActivitiesGroup = async (activitiesId, data) => {
    await api
      .patch(`/activities/${activitiesId}/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => toast.success("activity updated successfully"))
      .catch((err) => {
        console.log(err);
        toast.error("some error on the server");
      });
  };

  const deleteActivitiesGroup = async (activitiesId) => {
    await api
      .delete(`/activities/${activitiesId}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => toast.success("activity deleted successfully"))
      .catch((err) => {
        console.log(err);
        toast.error("some error on the server");
      });
  };

  const createGroup = (data) => {
    api
      .post("/groups/", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        toast.success("Group created successfully");
        getGroupsUser(token);
      })
      .catch((err) => {
        console.log(err);
        toast.error("some error on the server");
      });
  };

  const updateGroup = (groupId, data) => {
    api
      .patch(`/groups/${groupId}/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => toast.success("Activity updated successfully"))
      .catch((err) => {
        console.log(err);
        toast.error("some error on the server");
      });
  };

  const inscribeGroup = async (groupId) => {
    await api
      .post(`/groups/${groupId}/subscribe/`, groupId, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => toast.success("subscribe successful"))
      .catch((err) => {
        console.log(err);
        toast.error("some error on the server");
      });
  };

  const unsubscribeGroup = (groupId) => {
    api
      .delete(`/groups/${groupId}/unsubscribe/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        toast.success("successfully unsubscribed");
        getGroupsUser(token);
      })
      .catch((err) => {
        console.log(err);
        toast.error("some error on the server");
      });
  };

  return (
    <GroupsContext.Provider
      value={{
        groups,
        groupParticipants,
        groupGoals,
        groupActivities,
        groupCreator,
        dataGroup,
        myGroups,
        isParticipant,
        getFilteredGroups,
        getGroupsUser,
        getGroupAllParticipants,
        getGoalsGroup,
        deleteGoalsGroup,
        deleteActivitiesGroup,
        createGoalsGroup,
        updateGoalsGroup,
        getActivitiesGroup,
        createActivitiesGroup,
        updateActivitiesGroup,
        createGroup,
        updateGroup,
        inscribeGroup,
        unsubscribeGroup,
        setMyGroups,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};
