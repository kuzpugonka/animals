import { Link } from "react-router-dom";
import "./Error.css";

export const Error404 = () => {
  return (
    <>
      <div className="error">
        <div className="container">
          <div className="error__row">
            <h2 className="error__title">404</h2>
            <img className="error__img" src="./src/pages/Error/bg.png" />
            <p className="error__description">
              Запрашиваемая Вами страница не&nbsp;существует
              или&nbsp;была&nbsp;удалена.
              <br />
              <span className="error__description_accent">Вернитесь</span>{" "}
              на&nbsp;главную страницу.
            </p>
            <Link className="error__link" to="/">
              На&nbsp;главную
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
