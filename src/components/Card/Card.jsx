/* eslint-disable react/prop-types */
// Card.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ searchCategory }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setCards(data.products));
  }, []);

  // Filter cards based on the selected category
  const filteredCards = searchCategory
    ? cards.filter((card) =>
        card.category.toLowerCase().includes(searchCategory)
      )
    : cards;

  return (
    <div className="mt-10 mx-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 ">
      {filteredCards.map((card) => (
        <Link to={`/donation/${card.id}`} className="" key={card.id} style={{ backgroundColor: card.card_bg }}>
          <img className="w-full" src={card.picture} alt={card.title} />
          <p style={{ backgroundColor: card.text_button_bg, color: card.category_bg }} className="btn normal-case mx-2 my-2  text-sm font-medium">{card.category}</p>
          <h3 style={{ color: card.category_bg }} className="mx-2 text-xl font-semibold font-['Inter']">{card.title}</h3>
        </Link>
      ))}
    </div>
  );
};

export default Card;
