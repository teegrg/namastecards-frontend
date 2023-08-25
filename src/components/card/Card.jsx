import { Link } from "react-router-dom";

function Card({ card }) {
  return (
    <Link to={`/cards/${card.id}`}>
      <div className="card">
        <div className="card-content">
          <h3>{card.company}</h3>
          <p>{card.email}</p>
          <p>{card.phone}</p>
          <p>{card.address}</p>
          <p>{card.linkedin}</p>
        </div>
        <div className="line"></div>
      </div>
    </Link>
  );
}

export default Card;
