import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo-container">
          <img className="img" src={LOGO_URL} />
        </div>
        <nav>
          <div>
            <a href="/html/">Home</a>
          </div>
          <div>
            <a href="/css/">About</a>
          </div>
          <div>
            <a href="/js/">Help</a>
          </div>
          <div>
            <a href="/python/">Cart</a>
          </div>{" "}
        </nav>
      </div>
    </header>
  );
};

export default Header;
