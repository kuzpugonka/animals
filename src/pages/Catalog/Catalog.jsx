import { animalsArray } from "../../data/animals";
import { Card } from "../../components/Card/Card";
import { Side } from "../../components/Side/Side";
import { animalsCategory } from "../../data/animalsCategory";
import "./Catalog.css";
// TODO разобраться с выпадающими card__desc
export const Catalog = () => {
  const handleClick = () => {
    const desc = document.querySelector(".side__desc");
    desc.style.display = "flex";
    desc.add.className = "active"
  };

  return (
    <main className="main">
      <section className="catalog">
        <div className="container">
          <h2 className="catalog__title">Каталог</h2>
          <div className="side-wrap">
            <div className="side">
              {animalsCategory.map((item) => (
                <button className="side__btn" key={item.id} onClick={handleClick}>{item.categoryRu}</button>
              ))}
            </div>
          {animalsCategory.map((item) => (
            <Side
              key={item.id}
              img={item.img}
              text={item.description}
              title={item.categoryRu}
              category={item.category}
            />
          ))}
        </div>

        <div className="card-list">
        {animalsArray.map(item=>(
          <Card 
            key={item.id}
            title={item.title}
            liter={item.liter}
            img={item.thumbnail}
            category={item.categoryRu}
          />
        ))}
        </div>
        </div>
      </section>
    </main>
  );
};
