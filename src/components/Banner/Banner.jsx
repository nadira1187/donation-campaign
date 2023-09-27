/* eslint-disable react/prop-types */
import  { useState } from 'react';

const Banner = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = () => {
    // Convert searchInput to lowercase before passing it to the callback
    onSearch(searchInput.toLowerCase());
  };

  return (
    <div className="hero min-h-screen bg-[url('https://i.ibb.co/tPz3tK9/Rectangle-4281.png?fbclid=IwAR1iHjVSDlr0IdVaROO5H5jLL55Nlqc7etzJl89zd14a68j7Mt8X96F19Vw')]">
      <div className="w-full h-full backdrop-opacity-100 bg-white/70 flex flex-col justify-center items-center text-center ">
        <div className="text-center text-neutral-950 text-5xl font-bold font-['Inter'] pb-20">
          I Grow By Helping People In Need
        </div>
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search here…"
              className="input input-bordered"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button
              className="bg-[#FF444A] text-white px-4 py-2 rounded-r-lg"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;