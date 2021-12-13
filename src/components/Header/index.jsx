import logo from "../../logo.svg";
import { BsList } from "react-icons/bs";
import { Container } from "./styles";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const history = useHistory();

  const handleMobile = () => {
    setShowMenu(!showMenu);
  };
  return (
    <Container>
      <div className="logo">
        <img src={logo} alt="placeholder" />
      </div>
      {showMenu && (
        <section className="info">
          <p onClick={() => history.push("/")}>Home</p>
          <p onClick={() => history.push("/groups")}>Groups</p>
          <p
            onClick={() => {
              localStorage.clear();
              history.push("/");
            }}
          >
            Logout
          </p>
        </section>
      )}
      <BsList onClick={handleMobile} />
    </Container>
  );
};

export default Header;
