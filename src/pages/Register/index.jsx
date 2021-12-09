import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "../../components/Input";
import Button from "../../components/Button";

import { Container } from "./styles";

const Register = () => {
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Username required")
      .matches(
        /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/
        // "Usernames can consist of lowercase and capitals, Usernames can consist of alphanumeric characters",
        // "Usernames can consist of underscore and hyphens and spaces, Cannot be two underscores, two hypens or two spaces in a row",
        // "Cannot have a underscore, hypen or space at the start or end"
      ),
    email: yup.string().required("Email required").email("Invalid email"),
    password: yup
      .string()
      .required("Password required")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
        "Min 8 char( Special character, Number, Capital, Lower)"
      ),
    // deve conter ao menos um dígito
    // deve conter ao menos uma letra minúscula
    // deve conter ao menos uma letra maiúscula
    // deve conter ao menos um caractere especial
    // deve conter ao menos 8 dos caracteres mencionados))
    confirmPassword: yup
      .string()
      .required("Password confirm")
      .oneOf([yup.ref("passowrd")], "The passwords should be equal"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <Container>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit()}>
        <Input register={register} placeholder="Username" />
        <Input register={register} placeholder="Email" />
        <Input register={register} placeholder="Confirm" />
        <Input register={register} placeholder="Confirm password" />
        <Button type="submit">Register</Button>
      </form>
    </Container>
  );
};

export default Register;
