import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container header__container">
          <Link to="/" className="header__logo">
            <img
              src="./img/header/logo.png"
              srcSet="./img/header/logo2x.png 2x"
            />
          </Link>
          <button className="header__burger hidden">
            <img src="./img/header/burger.svg" />
          </button>
        </div>
      </header>      
    </>
  );
};
