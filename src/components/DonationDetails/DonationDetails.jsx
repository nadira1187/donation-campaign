import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DonationDetails = () => {
  const [donation, setDonation] = useState({});
  const { id } = useParams();

useEffect(() => {
  // Fetch your data from data.json or replace with your actual API endpoint.
  fetch("/data.json") // Replace with the correct path to your JSON file
    .then((res) => res.json())
    .then((data) => {
      // Find the donation with the matching 'id' parameter
      const findDonation = data.products.find((donation) => donation.id === id);
      if (findDonation) {
        setDonation(findDonation);
      }
    });
}, [id]);
const containerStyle = {
    width: '100%',
    height: '0',
    paddingBottom: '40%', 
    position: 'relative',
};

return (
    <div>
    {donation && (
      <div className="w-11/12 ">
      <div className="w-full rounded-md  bg-cover bg-center relative mx-4 mt-20 lg:mx-16" style={containerStyle}>
          <img
              src={donation.picture}
              alt={donation.category}
              className="absolute rounded-md  top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute rounded bottom-0 left-0 w-full h-20 bg-black bg-opacity-60">
              <div className="text-left ">
                  <button style={{ backgroundColor: donation.text_button_bg , color:donation.category_bg}} className="btn normal-case btn-primary border-none ml-6 mt-4">
                      Donate {donation.price}
                  </button>
              </div>
          </div>
      </div>
      <div className="text-neutral-content">
          <h1 className="py-4 mt-4 mx-4 lg:mx-16 text-3xl font-bold text-black">
              {donation.category}
          </h1>
          <p className="text-base font-normal text-neutral-600 mx-4 mb-10 lg:mx-16">
              {donation.description}
          </p>
      </div>
  </div>
    )}
  </div>
  
  
  
  



  );
      }
  
  

export default DonationDetails;
