import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../components/card/Card";
import Card1 from "../components/card/Card1";
import Card2 from "../components/card/Card2";
import pic from "../pages/image/uploadpic.png";
import "../print.css";

const API = process.env.REACT_APP_API_URL;

function CardNew() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("Choose one template");
  const [numCards, setNumCards] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);
  const [showClearButton, setShowClearButton] = useState(false);

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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePrint = () => {
    alert(
      "Heads-up, if you can't see the background on print view. When print view pops up, go to more settings and click on Background graphics"
    );
    openModal();
    setIsPrinting(true);
    setShowClearButton(true); // Show the Clear button
    // window.print();
  };

  const handleClear = () => {
    setIsPrinting(false);
    closeModal();
    setNumCards(1); // Reset numCards to 1
    setShowClearButton(false); // Hide the Clear button
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addCard(card);
  };

  const renderCards = () => {
    if (selected === "white") {
      return Array.from({ length: numCards }, (_, index) => (
        <Card key={index} card={card} />
      ));
    } else if (selected === "image") {
      return Array.from({ length: numCards }, (_, index) => (
        <Card1 key={index} card={card} />
      ));
    } else if (selected === "black") {
      return Array.from({ length: numCards }, (_, index) => (
        <Card2 key={index} card={card} />
      ));
    } else {
      return null;
    }
  };

  return (
    <>
      <div className="select__clear__btn">
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
        {showClearButton && <button onClick={handleClear}>Clear</button>}
      </div>
      <div className="new-wrapper">
        <div className="printable-content">{renderCards()}</div>
        {/* Modal */}
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <label htmlFor="numCards">Number of Cards:</label>
              <input
                id="numCards"
                type="number"
                value={numCards}
                onChange={(e) => setNumCards(parseInt(e.target.value))}
                min="1"
              />
              <button
                onClick={() => {
                  closeModal();
                  window.print();
                }}>
                Print
              </button>
              <button onClick={closeModal}>Cancel</button>
            </div>
          </div>
        )}
        {!isPrinting && (
          <>
            <div className="display__none">
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
        )}
      </div>
    </>
  );
}

export default CardNew;
