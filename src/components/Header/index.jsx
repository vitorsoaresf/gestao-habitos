import logo from "../../logo.svg";
import { BsList } from "react-icons/bs";
import { Container } from "./styles";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

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
        <div className="logo">
          <img src={logo} alt="placeholder" />
        </div>
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
