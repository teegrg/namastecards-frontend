import { Link } from "react-router-dom";

function Card2({ card }) {
  return (
    <div className="card2-wrapper">
      <div className="card2">
        <Link to={`/cards/${card.id}`}>
          <div className="card2-content">
            <p className="card2-css">{card.company}</p>
            <p className="card2-css font">{card.email}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Card2;
