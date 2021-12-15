import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { GroupsContext } from "../../providers/groups";
import { Container } from "./styles";
import Input from "../Input";
import Button from "../Button";
import { motion } from "framer-motion";
import { FaPencilAlt, AiFillSignal } from "react-icons/all";

const ModalGoals = ({ groupId, setModalGoals, updateActivitiesGoals }) => {
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
    console.log(data);

    setModalGoals(false);
    createGoalsGroup(groupId, data);
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
            <p>New goal</p>
            <Button onClick={() => setModalGoals(false)}>x</Button>
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
            <Input
              type="text"
              placeholder=" Difficulty"
              register={register}
              name="difficulty"
              error={errors.difficulty?.message}
            >
              <AiFillSignal />
            </Input>

            <Button type="submit">Create</Button>
          </form>
        </div>
      </motion.div>
    </Container>
  );
};

export default ModalGoals;
