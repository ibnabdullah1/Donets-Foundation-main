import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donations = () => {
  const [donations, setDonations] = useState([]);
  const [noFound, setNoFound] = useState(false);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem("donations"));
    if (donationItems) {
      setDonations(donationItems);
    } else {
      setNoFound("No Data Found");
    }
  }, []);

  return (
    <div className="min-h[60vh]  py-10 lg:py-20">
      {noFound ? (
        <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
      ) : (
        <div>
          <div className=" grid  md:grid-cols-1 lg:grid-cols-2 grid-cols-1 px-3 gap-6 md:px-6 lg:px-8">
            {isShow
              ? donations.map((donationItem) => (
                  <DonationCard
                    key={donationItem.id}
                    donationItem={donationItem}
                  ></DonationCard>
                ))
              : donations
                  .slice(0, 4)
                  .map((donationItem) => (
                    <DonationCard
                      key={donationItem.id}
                      donationItem={donationItem}
                    ></DonationCard>
                  ))}
          </div>
          <div className="text-center mt-10">
            {donations.length > 4 && (
              <button
                onClick={() => setIsShow(!isShow)}
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                {isShow ? "Previous" : "See more"}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default Donations;
