import { Link } from "react-router-dom";
import "./Card.css";

export const Card = ({ id, title, liter,  img }) => {
  return (
    <article className="card">
    <Link to={`/animal/${id}`} className="card-link">

      <div className="card__info">        
        <p className="card__liter">{liter}</p>      
        
        <div  className="card__img-wrap">
        <img
          className="card__img"
          src={img}
          alt={title}
        />
        </div>
      </div> 

      <h3 className="card__title">{title}</h3>
    </Link>
    </article>
  );
};