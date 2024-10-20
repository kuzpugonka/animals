import { Link } from "react-router-dom";
import "./Header.css";
import { BurgerModal } from "../BurgerModal/BurgerModal";

export const Header = () => {
  const handleClick = () => {
    const btn = document.querySelector(".burger-modal");
    btn.style.display = "flex";
  };

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
          <button
            className="header__burger"
            id="burger"
            onClick={handleClick}
          >
            <img src="./img/icons/burger-icon.svg" />
          </button>
        </div>
      </header>
      <BurgerModal />
    </>
  );
};
