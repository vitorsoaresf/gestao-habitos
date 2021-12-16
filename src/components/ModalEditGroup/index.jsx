import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { GroupsContext } from "../../providers/groups";
import { Container, ContainerForm } from "./styles";
import Input from "../Input";
import Button from "../Button";
import { motion } from "framer-motion";
import { FaPencilAlt, BiCategoryAlt, MdDescription } from "react-icons/all";

const ModalEditGroup = ({
  groupId,
  setModalEditGroup,
  updateActivitiesGoals,
}) => {
  const { updateGroup } = useContext(GroupsContext);

  const formSchema = yup.object().shape({
    name: yup.string().required("Name required"),
    description: yup.string().required("Description required"),
    category: yup.string().required("Category required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmitFunction = (data) => {
    setModalEditGroup(false);
    updateGroup(groupId, data);
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
            <p>Edit group</p>
            <Button onClick={() => setModalEditGroup(false)}>x</Button>
          </h1>
          <ContainerForm>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
              <Input
                type="text"
                placeholder="Name"
                register={register}
                name="name"
                error={errors.name?.message}
              >
                <FaPencilAlt />
              </Input>
              <Input
                type="text"
                placeholder="Description"
                register={register}
                name="description"
                error={errors.description?.message}
              >
                <BiCategoryAlt />
              </Input>
              <Input
                type="text"
                placeholder="Category"
                register={register}
                name="category"
                error={errors.category?.message}
              >
                <MdDescription />
              </Input>

              <Button type="submit">Confirm</Button>
            </form>
          </ContainerForm>
        </div>
      </motion.div>
    </Container>
  );
};

export default ModalEditGroup;
