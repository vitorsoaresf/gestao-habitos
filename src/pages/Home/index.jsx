import { Redirect, useHistory } from "react-router";
import { BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";
import Logo from "../../assets/anima-logo.png";
import Button from "../../components/Button";
import AboutUs from "../../components/AboutUs";
import love from "../../assets/Svg/love_svg.svg";
import {
  Container,
  TitleBox,
  AboutUsBox,
  PicBox,
  NameBox,
  ButtonBox,
} from "./styles";
import HeaderInitial from "../../components/HeaderInitial";

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
    <>
      <HeaderInitial />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Container>
          <div>
            <img src={love} alt="svg balao" />
            <div id="orange">
              <div>
                <div className="box_title">
                  <TitleBox>
                    <h1>Anima</h1>
                    <p className="p1">
                      The <strong>Anima</strong> platform is a great way to
                      manage your <i>habits</i> and connect you with people who
                      share the same habits.
                    </p>
                    <p className="p2">
                      In this sense, our <strong>objective</strong> is to enable
                      people, bonds with those who are far away, but who are
                      united by exercising and searching for new habits.
                    </p>

                    <div className="p3">
                      <p>Welcome</p>
                      <sup></sup>
                      <img src={Logo} alt="project Logo" />{" "}
                    </div>
                  </TitleBox>
                  <ButtonBox>
                    <Button onClick={() => history.push("/login")}>
                      Login
                    </Button>
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
    </>
  );
};

export default Home;
