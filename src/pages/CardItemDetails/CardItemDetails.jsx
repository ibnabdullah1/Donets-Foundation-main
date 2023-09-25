import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import { useParams } from "react-router-dom";
import CardItemDetailsCard from "./CardItemDetailsCard";

const CardItemDetails = () => {
  const [cardDetails, setCardDetails] = useState();
  const { id } = useParams();
  const cardItems = useLoaderData();

  useEffect(() => {
    const findSpecificItem = cardItems?.find(
      (cardItem) => cardItem.id === parseInt(id)
    );
    setCardDetails(findSpecificItem);
  }, [id, cardItems]);
  return (
    <div>
      <CardItemDetailsCard cardDetails={cardDetails} />
    </div>
  );
};

export default CardItemDetails;
