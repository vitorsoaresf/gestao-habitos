import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { AuthenticatedContext } from "../../providers/authenticated";
import { UserContext } from "../../providers/users";
import { Container } from "./styles";
import { useHistory } from "react-router-dom";

import Input from "../../components/Input";
import Button from "../../components/Button";

const Register = () => {
  const { registerUser } = useContext(UserContext);
  const { setAccess } = useContext(AuthenticatedContext);
  const history = useHistory();

  const formSchema = yup.object().shape({
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
    password: yup.string().required("Password required"),
    // .matches(
    //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
    //   "Min 8 char( Special character, Number, Capital, Lower)"
    // ),
    // deve conter ao menos um dígito
    // deve conter ao menos uma letra minúscula
    // deve conter ao menos uma letra maiúscula
    // deve conter ao menos um caractere especial
    // deve conter ao menos 8 dos caracteres mencionados))
    confirm_password: yup
      .string()
      .required("Password confirm")
      .oneOf([yup.ref("password")], "The passwords should be equal"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  // const onSubmitFunction = (data) => {
  //   console.log(data);
  //   registerUser(data)
  //     .then((_) => {
  //       setAccess();
  //       history.push("/dashboard");
  //     })
  //     .catch((_) => {});
  // };

  const onSubmitFunction = (data) => {
    registerUser(data)
      .then((_) => {
        setAccess();
        history.push("/dashboard");
      })
      .catch((_) => {});
  };

  return (
    <Container>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <Input
          type="text"
          placeholder="Username"
          register={register}
          name="username"
          error={errors.username?.message}
        />
        <Input
          type="email"
          placeholder="Email"
          register={register}
          name="email"
          error={errors.email?.message}
        />
        <Input
          type="password"
          placeholder="Password"
          register={register}
          name="password"
          error={errors.password?.message}
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          register={register}
          name="confirm_password"
          error={errors.confirm_password?.message}
        />
        <Button type="submit">Register</Button>
      </form>
    </Container>
  );
};

export default Register;
