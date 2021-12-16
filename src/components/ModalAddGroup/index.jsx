import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../Button";
import Input from "../Input";
import { GroupsContext } from "../../providers/groups";

import { Container } from "./style";
import { useContext } from "react";
import { motion } from "framer-motion";
import { FaPencilAlt, BiCategoryAlt, MdDescription } from "react-icons/all";

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h3>
            <p>Create New Group</p>
            <Button onClick={() => setShowAddGroupModal(false)}>X</Button>
          </h3>
          <form onSubmit={handleSubmit(submitFunction)}>
            <Input
              type="text"
              placeholder="Name"
              name="name"
              register={register}
              error={errors.name?.message}
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
              placeholder="Description"
              name="description"
              register={register}
              error={errors.description?.message}
            >
              <MdDescription />
            </Input>
            <Button type="submit">Create Group</Button>
          </form>
        </div>
      </motion.div>
    </Container>
  );
};

export default ModalAddGroup;
