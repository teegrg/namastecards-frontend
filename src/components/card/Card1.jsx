import { Link } from "react-router-dom";

function Card1({ card }) {
  const cardStyle = {
    backgroundImage: `url(${card.image})`,
    backgroundSize: "cover",
  };
  return (
    <Link to={`/cards/${card.id}`}>
      <div className="card1" style={cardStyle}>
        <h3 className="card1-h3">{card.name}</h3>
        <p className="card1-p">{card.tag}</p>
        <p className="card1-p">{card.phone}</p>
        <h2 className="card1-h2">{card.company}</h2>
        <p className="card1-p">{card.address}</p>
      </div>
    </Link>
  );
}

export default Card1;
