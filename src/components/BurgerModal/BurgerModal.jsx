import { Link } from "react-router-dom";
import "./BurgerModal.css";

export const BurgerModal = () => {
  const handleClick = () => {
    const btn = document.querySelector(".burger-modal");
    btn.style.display = "";
  };
  return (
    <>
      <section className="burger-modal">
      <h2 className="hidden">Главное меню сайта</h2>
        <div className="container">
          <div className="burger-modal__header">
            <img
              className="burger-modal__img"
              src="./img/icons/logo-icon.png"
              alt="logo"
            />
            <img
              className="burger-modal__close-btn"
              src="./img/icons/close-btn.svg" 
              alt="close"
              onClick={handleClick}
            />
          </div>
          <nav className="burger-modal__menu">
            <Link
              to={"/"}
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
              to={"./catalog "}
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
      </section>
    </>
  );
};
