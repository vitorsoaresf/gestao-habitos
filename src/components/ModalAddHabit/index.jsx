import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../Button";
import Input from "../Input";
import { HabitsContext } from "../../providers/habits";

import { Container } from "./style";
import { useContext } from "react";
import { motion } from "framer-motion";
import {
  FaPencilAlt,
  BiCategoryAlt,
  AiFillSignal,
  BsCalendar3,
} from "react-icons/all";

const ModalAdd = ({ userId, setShowAddModal }) => {
  const { createHabit } = useContext(HabitsContext);

  const schema = yup.object().shape({
    title: yup.string().required("Title required"),
    category: yup.string().required("Category required"),
    difficulty: yup.string().required("Difficulty required"),
    frequency: yup.string().required("Frequency required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitFunction = (data) => {
    const newHabit = {
      title: data.title,
      category: data.category,
      difficulty: data.difficulty,
      frequency: data.frequency,
      achieved: false,
      how_much_achieved: 0,
    };

    setShowAddModal(false);
    createHabit(newHabit);
  };

  return (
    <Container onClick={() => setShowAddModal(false)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h3>
            <p>Create New Habit </p>
            <Button onClick={() => setShowAddModal(false)}>x</Button>
          </h3>
          <form onSubmit={handleSubmit(submitFunction)}>
            <Input
              type="text"
              placeholder="Title"
              name="title"
              register={register}
              error={errors.title?.message}
            >
              <FaPencilAlt />
            </Input>
            <Input
              type="text"
              placeholder="Category"
              name="category"
              register={register}
              error={errors.category?.message}
            >
              <BiCategoryAlt />
            </Input>
            <Input
              type="text"
              placeholder="Dificulty"
              name="difficulty"
              register={register}
              error={errors.difficulty?.message}
            >
              <AiFillSignal />
            </Input>
            <Input
              type="text"
              placeholder="Frequency"
              name="frequency"
              register={register}
              error={errors.frequency?.message}
            >
              <BsCalendar3 />
            </Input>
            <Button type="submit">Create</Button>
          </form>
        </div>
      </motion.div>
    </Container>
  );
};

export default ModalAdd;
