import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../Button";
import Input from "../Input";
import { GroupsContext } from "../../providers/groups";

import { Container } from "./style";
import { useContext } from "react";

const ModalAddGroup = ({ userId, setShowAddGroupModal }) => {
  const { createGroup } = useContext(GroupsContext);

  const schema = yup.object().shape({
    name: yup.string().required("Name required"),
    category: yup.string().required("Category required"),
    description: yup.string().required("Description required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitFunction = (data) => {
    const newGroup = {
      name: data.name,
      description: data.description,
      category: data.category,
    };

    setShowAddGroupModal(false);
    createGroup(newGroup);
  };

  return (
    <Container>
      <div>
        <h3>Create New Group</h3>
        <form onSubmit={handleSubmit(submitFunction)}>
          <Input
            type="text"
            placeholder="Name"
            name="name"
            register={register}
            error={errors.name?.message}
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
            placeholder="Description"
            name="description"
            register={register}
            error={errors.description?.message}
          />
          <Button type="submit">Create Group</Button>
        </form>
      </div>
    </Container>
  );
};

export default ModalAddGroup;