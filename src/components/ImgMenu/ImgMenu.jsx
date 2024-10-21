import "./ImgMenu.css";
import { animalsArray } from "../../data/animals.js";

export const ImgMenu = () => {
  const images = animalsArray.map((item) => {
    return item.thumbnail;
  }); //ok

  const listItems = images.map((img) => {
    return (
      <li className="img-menu__item" key={img.i}>
        {/* TODO добавить ссылку на страницу животного */}
        {/* <Link className="img-menu__item-link" to={'/animal'}> */}
        <img className="img-menu__item-img" src={img} />
        {/* </Link> */}
      </li>
    );
  });

  return (
    <>
      <section className="img-menu">
        <div className="container">
          <ul className="img-menu__list">{listItems}</ul>
        </div>
      </section>
    </>
  );
};
