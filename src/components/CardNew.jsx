import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../components/card/Card";
import Card1 from "../components/card/Card1";
import Card2 from "../components/card/Card2";
import pic from "../pages/image/cardpic.jpeg"

const API = process.env.REACT_APP_API_URL;

function CardNew() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("Choose one template");
  

  const addCard = (newCards) => {
    console.log(newCards);
    axios
      .post(`${API}/cards`, newCards)
      .then(() => navigate("/cards"))
      .catch((e) => console.warn("catch", e));
  };

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

  const handleTextChange = (event) => {
    setCard({ ...card, [event.target.id]: event.target.value });
  };

  const handleSelectChange = (event) => {
    setSelected(event.target.value);
    //console.log(selected);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addCard(card);
  };

  
  return (
    <>
      <select
        name=""
        id=""
        className="new-select"
        onChange={handleSelectChange}>
        <option value="">Choose one template</option>
        <option value="white">White Background</option>
        <option value="image">Image Background</option>
        <option value="black">Black Background</option>
      </select>
      <div className="new-wrapper">
        <div className="printable-content">
          {selected === "white" ? (
            <Card card={card} />
          ) : selected === "image" ? (
            <Card1 card={card} />
          ) : selected === "black" ? (
            <Card2 card={card} />
          ) : null}
        </div>
        <article className="Quote-Details">
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
                    required
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
                    placeholder=" date"
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
                  <button onClick={() => window.print()}>Print</button>
                  <button onClick={() => window.print()}>Save</button>
                </form>
              </div>
            </div>
          </div>
        </article>
        <img className="new-pic" src={pic} alt="" />
      </div>
    </>
  );
}

export default CardNew;
