/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CategoryCard = ({ card }) => {
  return (
    <Link to={`/donation/${card.id}`} style={{ backgroundColor: card.card_bg }}>
      <img className="w-full" src={card.picture} alt={card.title} />
      <p style={{ backgroundColor: card.text_button_bg, color: card.category_bg }} className="btn normal-case mx-2 my-2  text-sm font-medium">
        {card.category}
      </p>
      <h3 style={{ color: card.category_bg }} className="mx-2 text-xl font-semibold font-['Inter']">
        {card.title}
      </h3>
    </Link>
  );
};

export default CategoryCard;
