import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container header__container">
          <Link to="/" className="header__logo">
            <img
              src="./img/header-component/logo.png"
              srcSet="./img/header-component/logo2x.png 2x"
            />
          </Link>
          <button className="header__burger">
            <img src="./img/header-component/burger.svg" />
          </button>
        </div>
      </header>      
    </>
  );
};
