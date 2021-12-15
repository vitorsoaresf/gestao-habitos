import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { GroupsContext } from "../../providers/groups";
import { Container } from "./styles";
import Input from "../Input";
import Button from "../Button";
import { motion } from "framer-motion";

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
    updateActivitiesGroup(currentActivities.id, data)
      .then((_) => {
        setModalEditActivities(false);
        updateActivitiesGoals();
      })
      .catch((err) => console.log(err));
  };

  const deleteActivity = () => {
    deleteActivitiesGroup(currentActivities.id)
      .then((_) => {
        setModalEditActivities(false);
        updateActivitiesGoals();
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
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
              <Button type="button" onClick={() => deleteActivity()}>
                Delete
              </Button>
            </div>
          </form>
        </div>
      </motion.div>
    </Container>
  );
};

export default ModalEditActivities;
