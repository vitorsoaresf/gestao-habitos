import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { GroupsContext } from "../../providers/groups";
import { Container, ContainerForm } from "./styles";
import Input from "../Input";
import Button from "../Button";

const ModalEdit = ({ groupId, setModalEdit }) => {
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
    setModalEdit(false);
    updateGroup(groupId, data);
  };

  return (
    <Container>
      <ContainerForm>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            type="text"
            placeholder="Name"
            register={register}
            name="name"
            error={errors.name?.message}
          />
          <Input
            type="text"
            placeholder="Description"
            register={register}
            name="description"
            error={errors.description?.message}
          />
          <Input
            type="text"
            placeholder="Category"
            register={register}
            name="category"
            error={errors.category?.message}
          />

          <Button type="submit">Confirm</Button>
        </form>
      </ContainerForm>
    </Container>
  );
};

export default ModalEdit;
