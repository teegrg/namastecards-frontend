import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function CardDetails() {
  const [card, setCard] = useState([]);

  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/cards/${id}`)
      .then((res) => setCard(res.data))
      .catch((e) => console.warn("catch", e));
  }, [id]);

  const deleteCard = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this card?"
    );
    if (confirmed) {
      axios
        .delete(`${API}/cards/${id}`)
        .then(
          () => {
            navigate(`/cards`);
          },
          (error) => console.error(error)
        )
        .catch((c) => console.warn("catch", c));
    }
  };

  return (
    <div className="show-background">
      <div className="show ">
        <p>Company: {card.company}</p>
        <p>Tag: {card.tag}</p>
        <p>Name: {card.name}</p>
        <p>Em@il: {card.email}</p>
        <p>Phone: {card.phone}</p>
        <p>Cell: {card.cell}</p>
        <p>Address: {card.address}</p>
        <p>Linkedin: {card.linkedin}</p>
      </div>
      <div className="show-img">Image: {card.image}</div>
      <div className="buttons">
        <Link to={`/cards`}>
          <div className="btn">Back&nbsp;</div>
        </Link>
        <Link to={`/cards/${card.id}/edit`}>
          <div className="btn">Edit&nbsp;</div>
        </Link>
        <div className="btn" onClick={deleteCard}>
          Delete&nbsp;
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
