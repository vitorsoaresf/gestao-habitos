import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { GroupsContext } from "../../providers/groups";
import { Container } from "./styles";
import Input from "../Input";
import Button from "../Button";

const ModalEditGoals = ({
  updateActivitiesGoals,
  setModalEditGoals,
  currentGoal,
}) => {
  const [title, setTitle] = useState(currentGoal.title);
  const [difficulty, setDifficulty] = useState(currentGoal.difficulty);

  const { updateGoalsGroup, deleteGoalsGroup } = useContext(GroupsContext);

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
    updateGoalsGroup(currentGoal.id, data);
    updateActivitiesGoals();
    console.log("entrou");
  };

  const deleteGoal = () => {
    setModalEditGoals(false);
    deleteGoalsGroup(currentGoal.id);
    updateActivitiesGoals();
  };

  return (
    <Container>
      <div>
        <h1>
          Edit goal
          <Button onClick={() => setModalEditGoals(false)}>x</Button>
        </h1>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Title"
            register={register}
            name="title"
            error={errors.title?.message}
          />
          <Input
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            type="text"
            placeholder="Difficulty"
            register={register}
            name="difficulty"
            error={errors.difficulty?.message}
          />

          <label htmlFor="achieved">
            <Input
              className="check"
              id="achieved"
              type="checkbox"
              placeholder=""
              register={register}
              name="achieved"
              error={errors.achieved?.message}
            />
            <p>achieved</p>
          </label>
          <div className="bt">
            <Button type="submit">Update</Button>
            <Button onClick={() => deleteGoal()}>Delete</Button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default ModalEditGoals;
