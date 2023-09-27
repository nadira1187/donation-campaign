import { useEffect, useState } from "react";
import DonationCard from "../DonationCard/DonationCard";

const DonationPage = () => {
  const [donations, setDonations] = useState([]);
  const [visibleDonations, setVisibleDonations] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem("DonationPage"));

    if (donationItems) {
      setDonations(donationItems);
      // Initially, show the first 4 donations
      setVisibleDonations(donationItems.slice(0, 4));
    } else {
      setNotFound("No Data Found");
    }
  }, []);

  // Function to show more cards when "See More" is clicked
  const handleSeeMore = () => {
    setVisibleDonations(donations);
    setShowAll(true);
  };

  return (
    <div className="mt-16">
      {notFound ? (
        <p className="h-[80vh] flex justify-center items-center">{notFound}</p>
      ) : (
        <div className="mx-20 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {visibleDonations.map((donation) => (
            <DonationCard key={donation.id} donation={donation}></DonationCard>
          ))}
        </div>
      )}

      {!showAll && donations.length > 4 && (
        <button
          onClick={handleSeeMore}
          className="mt-4 mx-auto block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          See More
        </button>
      )}
    </div>
  );
};

export default DonationPage;
