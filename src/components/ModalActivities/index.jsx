import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { GroupsContext } from "../../providers/groups";
import { Container } from "./styles";
import Input from "../Input";
import Button from "../Button";
import { motion } from "framer-motion";

import { FaPencilAlt } from "react-icons/all";

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h1>
            <p>New activity</p>
            <Button onClick={() => setModalActivities(false)}>x</Button>
          </h1>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <Input
              type="text"
              placeholder=" Title"
              register={register}
              name="title"
              error={errors.title?.message}
            >
              <FaPencilAlt />
            </Input>

            <Button type="submit">Create</Button>
          </form>
        </div>
      </motion.div>
    </Container>
  );
};

export default ModalActivities;
