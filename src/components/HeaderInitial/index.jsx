import Logo from "../../assets/anima-logo.png";
import { BsList } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Container, LeftSide, RightSide, Links, LogoBox } from "./styles";

const NavBar = () => {
  const history = useHistory();
  const [showLinks, setShowLinks] = useState(false);
  const [authenticated, setAuthenticated] = useState(
    !!JSON.parse(localStorage.getItem("@Anima/authenticated"))
  );
  useEffect(() => {
    setAuthenticated(
      !!JSON.parse(localStorage.getItem("@Anima/authenticated"))
    );
  }, []);

  return (
    <Container>
      <LeftSide>
        <LogoBox onClick={() => history.push("/")}>
          <div>
            <img src={Logo} alt="project Logo" />
          </div>
          <p>Anima</p>
        </LogoBox>
      </LeftSide>
      <RightSide>
        <Links
          id={showLinks ? "hidden" : ""}
          onClick={() => setShowLinks(false)}
        >
          {authenticated ? (
            <>
              <p>
                <Link to={"/"}>Dashboard</Link>
              </p>
              <p>
                <Link to={"/groups"}>Groups</Link>
              </p>
              <p>
                <Link
                  to={"/"}
                  onClick={() => {
                    localStorage.clear();
                  }}
                >
                  Logout
                </Link>
              </p>
            </>
          ) : (
            <>
              <p>
                <Link to={"/"}>Home</Link>
              </p>
              <p>
                <Link to={"/login"}>Login</Link>
              </p>
              <p>
                <Link to={"/register"}>Register</Link>
              </p>
            </>
          )}
        </Links>
        <button>
          <BsList onClick={() => setShowLinks(!showLinks)} />
        </button>
      </RightSide>
    </Container>
  );
};

export default NavBar;
