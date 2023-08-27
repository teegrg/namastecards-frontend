import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../components/card/Card";
import Card1 from "../components/card/Card1";
import Card2 from "../components/card/Card2";
import pic from "../pages/image/uploadpic.png";

const API = process.env.REACT_APP_API_URL;

function CardNew() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("Choose one template");

  const addCard = (newCards) => {
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

  const handlePrint = () => {
    alert("Heads-up, if you cant see the background on print view. When print view pops up go to more settings and click on Background graphics ")
    window.print();
  }

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
        <option value="white">White background</option>
        <option value="image">Image background</option>
        <option value="black">Black background</option>
      </select>
      <div className="new-wrapper">
        <div className="printable-content">
          {selected === "white" ? (
            <div>
              <Card card={card} />
              <Card card={card} />
              <Card card={card} />
              <Card card={card} />
              <Card card={card} />
            </div>
          ) : selected === "image" ? (
            <div>
              <Card1 card={card} />
              <Card1 card={card} />
              <Card1 card={card} />
              <Card1 card={card} />
              <Card1 card={card} />
            </div>
          ) : selected === "black" ? (
            <div>
              <Card2 card={card} />
              <Card2 card={card} />
              <Card2 card={card} />
              <Card2 card={card} />
              <Card2 card={card} />
            </div>
          ) : null}
        </div>
        <div className="dotted-line"></div>
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
                  <button onClick={handlePrint}>Print</button>
                  <button onClick={handleSubmit}>Save</button>
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
