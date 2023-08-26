import { Link } from "react-router-dom";

function Card1({ card }) {
  const cardStyle = {
    backgroundImage: `url(${card.image})`,
    backgroundSize: "cover",
  };
  return (
    <Link to={`/cards/${card.id}`}>
      <div className="card1" style={cardStyle}>
        {card.company}
        <p>{card.email}</p>
        <p>{card.phone}</p>
        <p>{card.address}</p>
        <p>{card.linkedin}</p>
      </div>
    </Link>
  );
}

export default Card1;
