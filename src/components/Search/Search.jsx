import "./Search.css";

export const Search = () => {
  // TODO добавить фильтрацию
  return (
    <>
      <section className="search">
        <div className="container">
          <form className="search__form">
            <input className="search__form-input" placeholder="Введи название животного" id="search" name="search"/>
            <button className="search__form-btn">
              <span className="search__form-btn_text">Найти</span>
              <img className="search__form-btn_icon" src="./img/icons/search-icon.svg" alt="search" aria-label="Кнопка поиска с изображением лупы"/>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
