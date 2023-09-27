// Banner.js
import React, { useState, useEffect } from "react";
import CategoryCard from "../CategoryCard/CategoryCard"; // Import the CategoryCard component

const Banner = () => {
  const [searchCategory, setSearchCategory] = useState("");
  const [cards, setCards] = useState([]);
  const [matchingCards, setMatchingCards] = useState([]);
  const [error, setError] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setCards(data.products));
  }, []);

  useEffect(() => {
    // Filter cards based on the selected category
    const filteredCards = cards.filter((card) =>
      card.category.toLowerCase().includes(searchCategory.toLowerCase())
    );
    setMatchingCards(filteredCards);
  }, [searchCategory, cards]);

  const handleSearch = () => {
    if (matchingCards.length === 0) {
      setError(true);
    } else {
      setError(false);
      setSearchPerformed(true); // Set searchPerformed to true when a valid search is performed
    }
  };

  return (
    <div>
      <div className="hero min-h-screen bg-[url('https://i.ibb.co/tPz3tK9/Rectangle-4281.png?fbclid=IwAR1iHjVSDlr0IdVaROO5H5jLL55Nlqc7etzJl89zd14a68j7Mt8X96F19Vw')]">
        <div className="w-full h-full backdrop-opacity-100 bg-white/70 flex flex-col justify-center items-center text-center ">
          <div className="text-center text-neutral-950 text-5xl font-bold font-['Inter'] pb-20">I Grow By Helping People In Need</div>
          <div className="">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search by category…"
                className="input input-bordered"
                value={searchCategory}
                onChange={(e) => setSearchCategory(e.target.value)}
              />
              <button
                className="w-[110px] bg-red-500 rounded-lg normal-case p-2 text-white"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {searchPerformed && (
        <div className="mt-10 mx-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {error ? (
            <div className="text-red-600 text-center mt-4">
              No matching cards found.
            </div>
          ) : (
            matchingCards.map((card) => (
              <CategoryCard key={card.id} card={card} />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Banner;
