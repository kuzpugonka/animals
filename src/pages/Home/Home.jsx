import { Menu } from "../../components/Menu/Menu";
import "./Home.css";

export const Home = () => {
  return (
    <main className="home">
      <div className="container">
        <div className="home__logo">
          <img
            src="./img/header-component/logo.png"
            srcSet="./img/header-component/logo2x.png 2x"
          />
        </div>
        <div className="home__container">
          <div className="home__content">
            <h1 className="home__title">дикие и домашние животные</h1>
            <p className="home__cta">
              Исследуй <span className="home__cta_color">удивительный </span>
              мир&nbsp;животных вместе с&nbsp;нами! Нажми на кнопку
              и&nbsp;начни&nbsp;своё&nbsp;приключение!
            </p>
            <Menu />
          </div>
          <div className="home__img">
            <video loop autoPlay muted className="home__video">
              <source
                src="/img/Home-page/home-gif.mp4" 
                type="video/mp4"
              ></source>
            </video>
          </div>
        </div>
      </div>
    </main>
  );
};
