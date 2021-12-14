import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { GroupsContext } from "../../providers/groups";
import { Container } from "./styles";
import Input from "../Input";
import Button from "../Button";

const ModalActivities = ({
  groupId,
  setModalActivities,
  updateActivitiesGoals,
}) => {
  const { createActivitiesGroup } = useContext(GroupsContext);

  const formSchema = yup.object().shape({
    title: yup.string().required("Title required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmitFunction = (data) => {
    data.group = groupId;
    data.realization_time = new Date();

    setModalActivities(false);
    createActivitiesGroup(groupId, data);
    updateActivitiesGoals();
  };

  return (
    <Container>
      <div>
        <h1>
          New activity{" "}
          <Button onClick={() => setModalActivities(false)}>x</Button>
        </h1>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            type="text"
            placeholder=" Title"
            register={register}
            name="title"
            error={errors.title?.message}
          />

          <Button type="submit">Create Activities</Button>
        </form>
      </div>
    </Container>
  );
};

export default ModalActivities;
