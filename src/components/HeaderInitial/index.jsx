import { Link, useHistory } from "react-router-dom";
import Logo from "../../assets/anima-logo.png";
import { Container, LogoBox } from "./styles";
const HeaderInitial = () => {
  const history = useHistory();
  return (
    <Container>
      <header>
        <div>
          <LogoBox onClick={() => history.push("/")}>
            <div>
              <img src={Logo} alt="project Logo" />
            </div>
            <p>Anima</p>
          </LogoBox>
          <section>
            <Link to={"/"}>Home</Link>
            <Link to={"/login"}>Login</Link>
            <Link to={"/register"}>Register</Link>
          </section>
        </div>
      </header>
    </Container>
  );
};

export default HeaderInitial;
