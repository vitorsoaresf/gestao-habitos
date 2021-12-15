import { BsList } from "react-icons/bs";
import { Container, LogoBox } from "./styles";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../../assets/anima-logo.png";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const history = useHistory();

  const handleMobile = () => {
    setShowMenu(!showMenu);
  };
  return (
    <motion.div
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      exit={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <Container>
        <LogoBox>
          <div>
            <img src={Logo} alt="project Logo" />
          </div>
          <p>Anima</p>
        </LogoBox>
        {showMenu && (
          <section className="info">
            <p onClick={() => history.push("/")}>Dashboard</p>
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
    </motion.div>
  );
};

export default Header;
