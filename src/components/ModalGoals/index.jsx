import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { GroupsContext } from "../../providers/groups";
import { Container } from "./styles";
import Input from "../Input";
import Button from "../Button";

const ModalGoals = ({ groupId, setModalGoals }) => {
  const { createGoalsGroup } = useContext(GroupsContext);

  const formSchema = yup.object().shape({
    title: yup.string().required("Title required"),
    difficulty: yup.string().required("Difficulty required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmitFunction = (data) => {
    data.group = groupId;
    data.how_much_achieved = 0;
    data.achieved = false;
    setModalGoals(false);

    createGoalsGroup(data);
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

        <Button type="submit">Create Goal</Button>
      </form>
    </Container>
  );
};

export default ModalGoals;
