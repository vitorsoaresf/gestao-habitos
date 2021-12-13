import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { GroupsContext } from "../../providers/groups";
import { Container } from "./styles";
import Input from "../Input";
import Button from "../Button";

const ModalEditGoals = ({
  updateActivitiesGoals,
  setModalEditGoals,
  currentGoal,
}) => {
  const { updateGoalsGroup } = useContext(GroupsContext);

  const formSchema = yup.object().shape({
    title: yup.string().required("Title required"),
    difficulty: yup.string().required("Difficulty required"),
    achieved: yup.boolean(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmitFunction = (data) => {
    data.how_much_achieved = 0;

    setModalEditGoals(false);
    updateGoalsGroup(currentGoal, data);
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
        <Input
          type="text"
          placeholder="Difficulty"
          register={register}
          name="difficulty"
          error={errors.difficulty?.message}
        />

        <Input
          type="checkbox"
          placeholder=""
          register={register}
          name="achieved"
          error={errors.achieved?.message}
        />

        <Button type="submit">Update</Button>
      </form>
    </Container>
  );
};

export default ModalEditGoals;
