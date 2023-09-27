/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

const DonationCard = ({ donation }) => {
  return (
    <div>
      <Link to={`/donation/${donation.id}`} key={donation.id}>
        <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <img
              src={donation.picture}
              alt={donation.category}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-6">
            <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
              {donation.category}
            </h6>
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {donation.title}
            </h4>
            <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
              ${donation.price}
            </p>
            <button className="btn bg-[#FF444A] btn-primary border-none ml-6 mt-4">
              View Details
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DonationCard;
