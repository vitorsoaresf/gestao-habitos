import { Container, ContainerUl } from "./styles";
import { useContext, useEffect } from "react";
import { GroupsContext } from "../../providers/groups";
import Header from "../../components/Header";
import CardGroups from "../../components/CardGroups";

const DetailsGroup = ({
  groupId = 3,
  token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM5NTA3NTAyLCJqdGkiOiI2NTc1ZjA0NThhZGU0MTM0YjQwOGFiODMyYTNhOGUzNSIsInVzZXJfaWQiOjEyOX0.aArPXnTUbPZM26vtR6525m6jcuqksm2mxl-S8kFgULM",
}) => {
  const {
    groupParticipants,
    getGroupAllParticipants,
    groupGoals,
    getGoalsGroup,
    groupActivities,
    getActivitiesGroup,
  } = useContext(GroupsContext);

  useEffect(() => {
    getGroupAllParticipants(groupId, token);
    getGoalsGroup(groupId, token);
    getActivitiesGroup(groupId);
  }, []);

  return (
    <>
      <Header />
      <Container>
        <CardGroups title="participants" list={groupParticipants} />
        <CardGroups title="goals" list={groupGoals} />
        <CardGroups title="activities" list={groupActivities} />
      </Container>
    </>
  );
};

export default DetailsGroup;
