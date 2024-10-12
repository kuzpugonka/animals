import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container header__container">
          <Link to="/" className="header__logo">
            <img
              src="./src/components/Header/logo.png"
              srcSet="./src/components/Header/logo2x.png 2x"
            />
          </Link>
          <button className="header__burger hidden">
            <img src="./src/components/Header/burger.svg" />
          </button>
        </div>
        TODO ВЫПАДАЮЩЕЕ МЕНЮ ИЗ БУРГЕРА
      </header>
    </>
  );
};
