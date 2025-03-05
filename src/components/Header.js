import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";

const Header = () => {
  const [login, setLogin] = useState("Login");
  return (
    <header>
      <div className="container">
        <div className="logo-container">
          <img className="img" src={LOGO_URL} />
        </div>
        <nav>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/about">About</Link>
          </div>
          <div>
            <Link to="/contact">Contact Us</Link>
          </div>
          <div>
            <Link to="#">Cart</Link>
          </div>
          <div>
            <Link
              to="#"
              onClick={() => {
                login === "Login" ? setLogin("Logout") : setLogin("Login");
              }}>
              {login}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
