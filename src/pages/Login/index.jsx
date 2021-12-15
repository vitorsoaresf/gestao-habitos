import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useHistory, Link, Redirect } from "react-router-dom";
import { AuthenticatedContext } from "../../providers/authenticated";
import Input from "../../components/Input";
import Button from "../../components/Button";
import yoga from "../../assets/Svg/yoga.svg";
import { Container } from "./styles";
import api from "../../services/api";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { FaUserAlt, FaLock } from "react-icons/all";

const Login = () => {
  const { setAccess } = useContext(AuthenticatedContext);
  const history = useHistory();

  const formSchema = yup.object().shape({
    username: yup.string().required("Username required"),
    password: yup.string().required("Password required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(formSchema) });

  if (JSON.parse(localStorage.getItem("@Anima/authenticated"))) {
    return (
      <Redirect
        to={`/dashboard/${JSON.parse(localStorage.getItem("@Anima/token"))}`}
      />
    );
  }

  const onSubmitFunction = async (data) => {
    await api
      .post("/sessions/", data)
      .then((response) => {
        localStorage.setItem(
          "@Anima/token",
          JSON.stringify(response.data.access)
        );
        setAccess();
        history.push(
          `/dashboard/${JSON.parse(localStorage.getItem("@Anima/token"))}`
        );
      })
      .catch((err) => {
        console.log(err);
        toast.error("unregistered user");
        reset();
      });
  };

  return (
    <motion.div
      initial={{ y: -900 }}
      animate={{ y: 0 }}
      exit={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <Container>
        <div>
          <img src={yoga} alt="Yoga svg" />
          <div>
            <h1>Login</h1>

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
                type="password"
                placeholder="Password"
                register={register}
                name="password"
                error={errors.password?.message}
              >
                <FaLock />
              </Input>

              <Button type="submit">Login</Button>
              <p>
                Don't have an account? <Link to="/register">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default Login;
