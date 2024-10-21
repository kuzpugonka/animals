import { Link } from "react-router-dom";
import "./BurgerModal.css";

export const BurgerModal = () => {
  const handleClick = () => {
    const btn = document.querySelector(".burger-modal");
    btn.style.display = "";
  };
  return (
    <>
      <div className="burger-modal">
        <img
          className="burger-modal__img"
          src=".\img\icons\logo-icon.png"
          alt="logo"
        />
        <nav className="burger-modal__menu">
          <Link
            to={"./"}
            className="burger-modal__link"
            onClick={handleClick}
          >
            Главная&nbsp;страница
          </Link>
          <Link
            to={"./about"}
            className="burger-modal__link"
            onClick={handleClick}
          >
            О&nbsp;сайте
          </Link>
          <Link
            to={"./gallery"}
            className="burger-modal__link"
            onClick={handleClick}
          >
            Галерея
          </Link>
          <Link
            to={"./animals"}
            className="burger-modal__link"
            onClick={handleClick}
          >
            Животные
          </Link>
          <Link
            to={"./animal"}
            className="burger-modal__link"
            onClick={handleClick}
          >
            Животное
          </Link>
        </nav>
      </div>
    </>
  );
};
