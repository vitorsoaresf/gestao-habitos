import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../Button";
import Input from "../Input";
import { HabitsContext } from "../../providers/habits";

import { Container } from "./style";
import { useContext } from "react";

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
    <Container>
      <div>
        <h3>Create New Habit</h3>
        <form onSubmit={handleSubmit(submitFunction)}>
          <Input
            type="text"
            placeholder="Title"
            name="title"
            register={register}
            error={errors.title?.message}
          />
          <Input
            type="text"
            placeholder="Category"
            name="category"
            register={register}
            error={errors.category?.message}
          />
          <Input
            type="text"
            placeholder="Dificulty"
            name="difficulty"
            register={register}
            error={errors.difficulty?.message}
          />
          <Input
            type="text"
            placeholder="Frequency"
            name="frequency"
            register={register}
            error={errors.frequency?.message}
          />
          <Button type="submit">Create Habit</Button>
        </form>
      </div>
    </Container>
  );
};

export default ModalAdd;
