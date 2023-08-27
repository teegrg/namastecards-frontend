import { Link } from "react-router-dom";

function Card2({ card }) {
  return (
    <div className="card2-wrapper">
      <div className="card2">
        <Link to={`/cards/${card.id}`}>
          <div className="card2-content">
            <p className="card2-p1">{card.company}</p>
            <p className="card2-p2 font">{card.phone}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Card2;
