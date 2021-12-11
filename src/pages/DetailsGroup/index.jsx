import { Container, ContainerUl } from "./styles";
import { useContext, useEffect } from "react";
import { GroupsContext } from "../../providers/groups";
import Header from "../../components/Header";
import CardGroups from "../../components/CardGroups";

const DetailsGroup = ({
  groupId = 3,
  token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM5NTA3NTAyLCJqdGkiOiI2NTc1ZjA0NThhZGU0MTM0YjQwOGFiODMyYTNhOGUzNSIsInVzZXJfaWQiOjEyOX0.aArPXnTUbPZM26vtR6525m6jcuqksm2mxl-S8kFgULM",
}) => {
  const { groupParticipants, getGroupAllParticipants } =
    useContext(GroupsContext);
  useEffect(() => {
    getGroupAllParticipants(groupId, token);
  }, []);

  return (
    <Container>
      <Header />
      <CardGroups title="Participants" list={groupParticipants}>
        <ContainerUl>
          {groupParticipants.map((participant, index) => (
            <li key={index}>{participant.username}</li>
          ))}
        </ContainerUl>
      </CardGroups>
    </Container>
  );
};

export default DetailsGroup;
