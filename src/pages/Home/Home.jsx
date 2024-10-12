import { Menu } from "../../components/Menu/Menu";
import "./Home.css";

export const Home = () => {
  return (
    <main className="home">
      <div className="container">
        <div className="home__content">
          <h1 className="home__title">дикие и домашние животные</h1>
          <p className="home__cta">
            Исследуй <span className="home__cta_color">удивительный </span>
             мир&nbsp;животных вместе с&nbsp;нами! Нажми на кнопку и&nbsp;начни&nbsp;своё&nbsp;приключение!          
          </p>
          <Menu />
        </div>
      </div>
    </main>
  );
};
