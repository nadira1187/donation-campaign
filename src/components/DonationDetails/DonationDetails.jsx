
import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const DonationDetails = () => {
  const [details, setDetails] = useState({});
  const { id } = useParams();

useEffect(() => {
  fetch("/data.json") 
    .then((res) => res.json())
    .then((data) => {
      const findDonation = data.products.find((details) => details.id === id);
      if (findDonation) {
        setDetails(findDonation);
      }
    });
}, [id]);

const handleDonateClick = () => {
  const MySwal = withReactContent(Swal)
  MySwal.fire({
    title: <p>Your donation is successfull!</p>
  })


  const addedDonations =[];
  const donationItems = JSON.parse(localStorage.getItem('DonationPage'))
  if(!donationItems){
      addedDonations.push(details)
      localStorage.setItem('DonationPage', JSON.stringify(addedDonations));
  }
  else{
      
      addedDonations.push(...donationItems, details)
      localStorage.setItem('DonationPage', JSON.stringify(addedDonations));
  }
};
const containerStyle = {
    width: '100%',
    height: '0',
    paddingBottom: '40%', 
    position: 'relative',
};

return (
    <div>
    {details && (
      <div className="w-11/12 ">
      <div className="w-full rounded-md  bg-cover bg-center relative mx-4 mt-20 lg:mx-16" style={containerStyle}>
          <img
              src={details.picture}
              alt={details.category}
              className="absolute rounded-md  top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute rounded bottom-0 left-0 w-full h-20 bg-black bg-opacity-60">
              <div className="text-left ">
                  <button  onClick={handleDonateClick}  style={{ backgroundColor: details.text_button_bg , color:details.category_bg}} className="btn normal-case btn-primary border-none ml-6 mt-4">
                      Donate {details.price}
                  </button>
              </div>
          </div>
      </div>
      <div className="text-neutral-content">
          <h1 className="py-4 mt-4 mx-4 lg:mx-16 text-3xl font-bold text-black">
              {details.category}
          </h1>
          <p className="text-base font-normal text-neutral-600 mx-4 mb-10 lg:mx-16">
              {details.description}
          </p>
      </div>
  </div>
    )}
  </div>
  );
      }

export default DonationDetails;