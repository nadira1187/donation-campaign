import { useEffect, useState } from "react";
import DonationCard from "../DonationCard/DonationCard";


const DonationPage = () => {

  const [donations, setDonations] = useState([]);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {

    const donationItems = JSON.parse(localStorage.getItem("DonationPage"));

    if (donationItems) {
      setDonations(donationItems)
    }
    else {
      setNotFound("No Data Found");
    }

  }, []);

  console.log(donations);

  return (
    <div className="mt-16">
      {notFound ? <p className="h-[80vh] flex justify-center items-center">{notFound}</p> :
        <div className="mx-20 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {donations.map((donation) => <DonationCard key={donation.id} donation={donation}></DonationCard>


          )}

        </div>

      }
    </div>
  );
};

export default DonationPage;