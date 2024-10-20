import "./Search.css";

export const Search = () => {
  // TODO добавить фильтрацию
  return (
    <>
      <section className="search">
        <div className="container">
          <form className="search__form">
            <input className="search__form-input" placeholder="Введи название животного"/>
            <button className="search__form-btn">
              <span className="search__form-btn_text">Найти</span>
              <img className="search__form-btn_icon" src="./img/icons/search-icon.svg"/>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
