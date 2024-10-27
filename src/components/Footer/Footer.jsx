import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__logo">
            <img className="footer__logo-img" src="./img/footer-logo.png" />
          </div>
          <div className="footer__info">
            <p>Некоммерческий учебный проект</p>{" "}
            <p>
              Изображения и&nbsp;тексты сгенерированы с&nbsp;использованием
              сервисов Яндекс «Шедеврум» и&nbsp;«Чат с&nbsp;Алисой»
            </p>
          </div>
          <div className="footer__wrap">
            <div className="footer__wrap-dev">
              <p className="footer__dev">
                Дизайнер и&nbsp;разработчик:
                <Link
                  className="footer__dev-link"
                  to={"https://t.me/kuzpugonka"}
                  target="_blank"
                >
                  Софья&nbsp;Илясова
                </Link>
              </p>

              <p className="footer__copiraight">©kuzpugonka 2024</p>
            </div>

            <div className="footer__wrap-menu">
              <Link className="footer__menu" to={"/"}>
                Главная страница
              </Link>
              <Link className="footer__menu" to={"/about"}>
                О сайте
              </Link>
              <Link className="footer__menu" to={"/gallery"}>
                Галерея
              </Link>
              <Link className="footer__menu" to={"/catalog"}>
                Животные
              </Link>
            </div>

            <div className="footer__wrap-contacts">
              <Link
                className="footer__contact-link"
                to={"https://t.me/kuzpugonka"}
                target="_blank"
              >
                <img
                  className="footer__contact-img"
                  src="./img/icons/telegram.svg"
                  alt="Telegram"
                />
              </Link>

              <Link
                className="footer__contact-link"
                to={"https://vk.me/kuzpugonka"}
                target="_blank"
              >
                <img
                  className="footer__contact-img"
                  src="./img/icons/vk.svg"
                  alt="вконтакте"
                />
              </Link>

              <Link
                className="footer__contact-link"
                to={"https://github.com/kuzpugonka"}
                target="_blank"
              >
                <img
                  className="footer__contact-img"
                  src="./img/icons/github.svg"
                  alt="github"
                />
              </Link>

              <Link
                className="footer__contact-link"
                to={"https://ok.ru/kuzpugonka"}
                target="_blank"
              >
                <img
                  className="footer__contact-img"
                  src="./img/icons/ok.svg"
                  alt="одноклассники"
                />
              </Link>

              <Link
                className="footer__contact-link"
                to={"https://be.net/kuzpugonka"}
                target="_blank"
              >
                <img
                  className="footer__contact-img"
                  src="./img/icons/behans.svg"
                  alt="behance"
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
