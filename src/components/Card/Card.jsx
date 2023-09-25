import { useEffect, useState } from "react";

const Card = () => {
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCards(data.products));
  }, []);

  return (
    <div className="mt-10 mx-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 ">
      {cards.map((card) => (
        <div className="rounded-xl" key={card.id} style={{ backgroundColor: card.card_bg }}>
          <img className="w-full" src={card.picture} alt={card.title} />
          <p style={{ backgroundColor: card.text_button_bg , color:card.category_bg}} className="btn normal-case mx-2 my-2  text-sm font-medium">{card.category}</p>
          <h3 style={{ color: card.category_bg}} className=" mx-2 text-xl font-semibold font-['Inter']">{card.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Card;

