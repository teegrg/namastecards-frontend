import { Link } from "react-router-dom";
import { IoLogoLinkedin } from "react-icons/io";

function Card({ card }) {
  return (
    <Link className="card-link" to={`/cards/${card.id}`}>
      <div className="card">
        <div className="card-content">
          <h1>{card.company}</h1>
          <p>{card.email}</p>
          <p>{card.phone}</p>
          <p>{card.address}</p>
          <p><IoLogoLinkedin/>{card.linkedin}</p>
        </div>
        <div className="line"></div>
      </div>
    </Link>
  );
}

export default Card;
