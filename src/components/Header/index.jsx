import logo from "../../logo.svg";
import { BsList } from "react-icons/bs";
import { Container } from "./styles";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMobile = () => {
    setShowMenu(!showMenu);
  };
  return (
    <Container>
      <div className="logo">
        <img src={logo} alt="placeholder" />
      </div>
      <BsList onClick={handleMobile} />
      {showMenu && (
        <section className="info">
          <p>Home</p>
          <p>Groups</p>
          <p>Logout</p>
        </section>
      )}
    </Container>
  );
};

export default Header;
