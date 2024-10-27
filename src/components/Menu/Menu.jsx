import { Link } from "react-router-dom";
import "./Menu.css";

export const Menu = () => {
  return (
    <nav className="menu">
      <img className="menu__burger" src="./img/icons/burger-icon.svg"/>
      <Link to={"./about"} className="menu__link">
        О&nbsp;сайте
      </Link>
      <Link to={"./gallery"} className="menu__link">
        Галерея
      </Link>
      <Link to={"./catalog"} className="menu__link menu__link_btn">
        Животные
      </Link>
    </nav>
  );
};
