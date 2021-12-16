import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import { UserContext } from "../../providers/users";
import Input from "../../components/Input";
import Button from "../../components/Button";
import SignUp from "../../assets/Svg/signUp.svg";
import { motion } from "framer-motion";
import { Container, LogoBox } from "./styles";
import { FaUserAlt, FaLock, MdEmail } from "react-icons/all";
import HeaderInitial from "../../components/HeaderInitial";
import Logo from "../../assets/anima-logo.png";

const Register = () => {
  const { registerUser } = useContext(UserContext);
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

  if (JSON.parse(localStorage.getItem("@Anima/authenticated"))) {
    return (
      <Redirect
        to={`/dashboard/${JSON.parse(localStorage.getItem("@Anima/token"))}`}
      />
    );
  }

  const onSubmitFunction = (data) => {
    registerUser(data)
      .then((_) => {
        history.push("/login");
      })
      .catch((_) => {});
  };

  return (
    <motion.div
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      exit={{ x: 0 }}
      transition={{ duration: 1 }}
    >
      <HeaderInitial />
      <Container>
        <div>
          <img src={SignUp} alt="Signup svg" />
          <div>
            <h1>Sign Up</h1>

            <form onSubmit={handleSubmit(onSubmitFunction)}>
              <Input
                type="text"
                placeholder="Username"
                register={register}
                name="username"
                error={errors.username?.message}
              >
                <FaUserAlt />
              </Input>
              <Input
                type="email"
                placeholder="Email"
                register={register}
                name="email"
                error={errors.email?.message}
              >
                <MdEmail />
              </Input>
              <Input
                type="password"
                placeholder="Password"
                register={register}
                name="password"
                error={errors.password?.message}
              >
                <FaLock />
              </Input>
              <Input
                type="password"
                placeholder="Confirm Password"
                register={register}
                name="confirm_password"
                error={errors.confirm_password?.message}
              >
                <FaLock />
              </Input>
              <Button type="submit">Register</Button>
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </form>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default Register;
