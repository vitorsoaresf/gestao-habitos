import { Redirect, useHistory } from "react-router";
import { BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";

import Button from "../../components/Button";
import Logo from "../../assets/anima-logo.png";
import AboutUs from "../../components/AboutUs";
import love from "../../assets/Svg/love_svg.svg";
import {
  Container,
  TitleBox,
  LogoBox,
  AboutUsBox,
  PicBox,
  NameBox,
  ButtonBox,
} from "./styles";

const Home = () => {
  const history = useHistory();

  if (JSON.parse(localStorage.getItem("@Anima/authenticated"))) {
    return (
      <Redirect
        to={`/dashboard/${JSON.parse(localStorage.getItem("@Anima/token"))}`}
      />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Container>
        <header>
          <div>
            <LogoBox>
              <div>
                <img src={Logo} alt="project Logo" />
              </div>
              <p>Anima</p>
            </LogoBox>
            <a href="#devTeam">About Us</a>
          </div>
        </header>
        <div>
          <img src={love} alt="svg balao" />
          <div id="orange">
            <div>
              <div>
                <TitleBox>
                  <h1>Anima</h1>
                  <p>
                    A great way to manage your habits and connect you with
                    people who share the same habits.
                  </p>
                </TitleBox>
                <ButtonBox>
                  <Button onClick={() => history.push("/login")}>Login</Button>
                  <Button isGray onClick={() => history.push("/register")}>
                    Sign up
                  </Button>
                </ButtonBox>
              </div>
            </div>
          </div>
        </div>
        <AboutUsBox id="devTeam">
          <div>
            {AboutUs.map((element, index) => (
              <div key={index}>
                <NameBox>
                  <h1>{element.name}</h1>
                  <p>, {element.function}</p>
                </NameBox>
                <PicBox>
                  <img src={element.img} alt="Dev in question" />
                  <h4>{element.description}</h4>
                </PicBox>
                <div>
                  <BsLinkedin />
                  <a href={element.linkedin} target="_blank" rel="noreferrer">
                    Linkedin
                  </a>
                </div>
              </div>
            ))}
          </div>
        </AboutUsBox>
      </Container>
    </motion.div>
  );
};

export default Home;
