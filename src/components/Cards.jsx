import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./card/Card";
import Card1 from "./card/Card1";
import Card2 from "./card/Card2";

const API = process.env.REACT_APP_API_URL;

function Cards() {
  const [cards, setCards] = useState([]);
  // console.log(`${API}/cards`);
  useEffect(() => {
    axios
      .get(`${API}/cards`)
      .then((res) => {
        setCards(res.data);
        // console.log(cards);
      })
      .catch((e) => console.warn("catch", e));
  }, []);

  return (
    <div className="index">
      {cards.map((card) => (
        <div key={card.id} className="index-box">
          <Card card={card} />
          <Card1 card={card} />
          <Card2 card={card} />
        </div>
      ))}
    </div>
  );
}

export default Cards;
