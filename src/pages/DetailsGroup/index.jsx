import { Container, ContainerUl } from "./styles";
import { useContext, useEffect } from "react";
import { GroupsContext } from "../../providers/groups";
import Header from "../../components/Header";
import CardGroups from "../../components/CardGroups";

const DetailsGroup = ({ groupId = 17 }) => {
  const {
    groupParticipants,
    getGroupAllParticipants,
    groupGoals,
    getGoalsGroup,
    groupActivities,
    getActivitiesGroup,
  } = useContext(GroupsContext);

  useEffect(() => {
    getGroupAllParticipants(groupId);
    getGoalsGroup(groupId);
    getActivitiesGroup(groupId);
  }, []);

  return (
    <>
      <Header />
      <Container>
        <CardGroups title="participants" list={groupParticipants} />
        <CardGroups groupId={groupId} title="goals" list={groupGoals} />
        <CardGroups
          groupId={groupId}
          title="activities"
          list={groupActivities}
        />
      </Container>
    </>
  );
};

export default DetailsGroup;
