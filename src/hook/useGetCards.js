import { useEffect, useState } from "react";

const useGetCards = () => {
  const [donations, setDonations] = useState();

  useEffect(() => {
    fetch("/donation.json")
      .then((res) => res.json())
      .then((data) => setDonations(data));
  }, []);

  return [donations];
};
export default useGetCards;
