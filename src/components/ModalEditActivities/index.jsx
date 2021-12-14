import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { GroupsContext } from "../../providers/groups";
import { Container } from "./styles";
import Input from "../Input";
import Button from "../Button";

const ModalEditActivities = ({
  updateActivitiesGoals,
  setModalEditActivities,
  currentActivities,
}) => {
  const [title, setTitle] = useState(currentActivities.title);

  const { updateActivitiesGroup, deleteActivitiesGroup } =
    useContext(GroupsContext);

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
    updateActivitiesGroup(currentActivities.id, data);
    updateActivitiesGoals();
  };

  const deleteActivity = () => {
    setModalEditActivities(false);
    deleteActivitiesGroup(currentActivities.id);
    updateActivitiesGoals();
  };

  return (
    <Container>
      <div>
        <h1>
          Edit activity
          <Button onClick={() => setModalEditActivities(false)}>x</Button>
        </h1>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder={currentActivities.title}
            register={register}
            name="title"
            error={errors.title?.message}
          />

          <div className="bt">
            <Button type="submit">Update</Button>
            <Button onClick={() => deleteActivity()}>Delete</Button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default ModalEditActivities;
