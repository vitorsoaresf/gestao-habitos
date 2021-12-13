import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useHistory, Link, Redirect } from "react-router-dom";

import { UserContext } from "../../providers/users";
import { AuthenticatedContext } from "../../providers/authenticated";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { Container } from "./styles";
import { HabitsContext } from "../../providers/habits";

const Login = () => {
  const { login } = useContext(UserContext);
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
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  if (JSON.parse(localStorage.getItem("@Anima/authenticated"))) {
    return <Redirect to="/dashboard" />;
  }

  const onSubmitFunction = (data) => {
    setAccess();
    login(data)
      .then((_) =>
        history.push(
          `/dashboard/${JSON.parse(localStorage.getItem("@Anima/token"))}`
        )
      )
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <h1>Login</h1>

      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <Input
          type="text"
          placeholder="Username"
          register={register}
          name="username"
          error={errors.username?.message}
        />

        <Input
          type="password"
          placeholder="Password"
          register={register}
          name="password"
          error={errors.password?.message}
        />

        <Button type="submit">Login</Button>
        <p>
          Don't have an account? <Link to="/register">Sign up</Link>
        </p>
      </form>
    </Container>
  );
};

export default Login;
