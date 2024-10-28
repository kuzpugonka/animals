import "./Side.css";

export const Side = ({ id, text, img, title }) => {
  return (
    <div className='side__desc'>
      <p className="side__desc-text">{text}</p>
      <img className="side__desc-img" src={img} alt={title} />
    </div>
  );
};
