import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function CardEdit() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [card, setCard] = useState({
    company: "",
    tag: "",
    name: "",
    email: "",
    phone: "",
    cell: "",
    address: "",
    linkedin: "",
    image: "",
  });

  const addCard = (updatedCard) => {
    axios
      .put(`${API}/cards/${id}`, updatedCard)
      .then(() => {
        navigate(`/cards/${id}`);
      })
      .catch((e) => console.warn("catch", e));
  };

  const handleTextChange = (event) => {
    setCard({ ...card, [event.target.id]: event.target.value });
    // console.log(event.target.id);
    // console.log(event.target.value);
  };

  useEffect(() => {
    axios
      .get(`${API}/cards/${id}`)
      .then((res) => setCard(res.data))
      .catch((e) => navigate("/not-found"));
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    addCard(card, id);
  };

  return (
    <article>
      <div className="card-container">
        <div className="card-form">
          <div className="">
            <form onSubmit={handleSubmit}>
              <label htmlFor="company">Company:</label>
              <input
                id="company"
                value={card.company}
                type="text"
                onChange={handleTextChange}
                placeholder=" company"
              />
              <label htmlFor="tag">Tag:</label>
              <input
                id="tag"
                type="text"
                value={card.tag}
                placeholder=" tag"
                onChange={handleTextChange}
              />
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                type="text"
                name="name"
                value={card.name}
                placeholder=" name"
                onChange={handleTextChange}
              />
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="text"
                name="email"
                value={card.email}
                placeholder=" email"
                onChange={handleTextChange}
              />
              <label htmlFor="phone">Phone:</label>
              <input
                id="phone"
                type="text"
                name="phone"
                value={card.phone}
                placeholder=" 000 000 0000"
                onChange={handleTextChange}
              />
              <label htmlFor="cell">Cell:</label>
              <input
                id="cell"
                type="text"
                name="cell"
                value={card.cell}
                placeholder=" cell"
                onChange={handleTextChange}
              />
              <label htmlFor="address">Address:</label>
              <input
                id="address"
                type="text"
                name="address"
                value={card.address}
                placeholder=" address"
                onChange={handleTextChange}
              />
              <label htmlFor="linkedin">Linkedin:</label>
              <input
                id="linkedin"
                type="text"
                name="linkedin"
                value={card.linkedin}
                placeholder=" linkedin"
                onChange={handleTextChange}
              />
              <label htmlFor="image">Image:</label>
              <input
                id="image"
                type="text"
                name="image"
                value={card.image}
                placeholder=" image URL"
                onChange={handleTextChange}
              />
              <br />
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </article>
  );
}

export default CardEdit;
