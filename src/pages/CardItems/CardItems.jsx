import React from "react";
import CardItemsCard from "./CardItemsCard";

const CardItems = ({ cardItems, inputValue }) => {
  const filteredItems = cardItems.filter(
    (cardItem) =>
      cardItem.category.toLowerCase().includes(inputValue.toLowerCase()) ||
      cardItem.category.toLowerCase() === inputValue.toLowerCase()
  );
  console.log(filteredItems);
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 px-5 py-5 lg:px-10 lg:py-10">
      {filteredItems.map((cardItem) => (
        <CardItemsCard key={cardItem.id} cardItem={cardItem} />
      ))}
    </div>
  );
};

export default CardItems;
