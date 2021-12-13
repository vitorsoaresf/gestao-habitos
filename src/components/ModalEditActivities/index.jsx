import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { GroupsContext } from "../../providers/groups";
import { Container } from "./styles";
import Input from "../Input";
import Button from "../Button";

const ModalEditActivities = ({
  updateActivitiesGoals,
  setModalEditActivities,
  currentActivities,
}) => {
  const { updateActivitiesGroup } = useContext(GroupsContext);

  const formSchema = yup.object().shape({
    title: yup.string().required("Title required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmitFunction = (data) => {
    setModalEditActivities(false);
    updateActivitiesGroup(currentActivities, data);
    updateActivitiesGoals();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <Input
          type="text"
          placeholder="Title"
          register={register}
          name="title"
          error={errors.title?.message}
        />

        <Button type="submit">Update</Button>
      </form>
    </Container>
  );
};

export default ModalEditActivities;
