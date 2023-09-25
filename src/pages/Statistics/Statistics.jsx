import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import PieColor from "./PieChart";

const Statistics = () => {
  const [donations, setDonations] = useState(0);
  const [cardPercentage, setCardPercentage] = useState(100);
  const [donationPercentage, setDonationPercentage] = useState(0);

  const totalDonations = useLoaderData();
  const totalDonationLength = totalDonations.length;

  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem("donations"));
    if (donationItems?.length > 0) {
      setDonations(donationItems?.length);
    }

    console.log(donationItems, donations);
    const cardItemsPercentage = parseFloat(
      (((totalDonationLength - donations) / totalDonationLength) * 100).toFixed(
        2
      )
    );
    setCardPercentage(cardItemsPercentage);

    const donationsPercentage = parseFloat(
      ((donations / totalDonationLength) * 100).toFixed(2)
    );
    setDonationPercentage(donationsPercentage);
  }, [donations, totalDonationLength]);

  return (
    <div className="min-h-[70vh]  flex justify-center items-center">
      <PieColor
        cardPercentage={cardPercentage}
        donationPercentage={donationPercentage}
      />
    </div>
  );
};

export default Statistics;
