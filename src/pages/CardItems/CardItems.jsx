import CardItemsCard from "./CardItemsCard";
import PropTypes from "prop-types";
const CardItems = ({ cardItems, inputValue }) => {
  const filteredItems = cardItems.filter(
    (cardItem) =>
      cardItem.category.toLowerCase().includes(inputValue.toLowerCase()) ||
      cardItem.category.toLowerCase() === inputValue.toLowerCase()
  );
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 px-5 py-5 lg:px-10 lg:py-10">
      {filteredItems.map((cardItem) => (
        <CardItemsCard key={cardItem.id} cardItem={cardItem} />
      ))}
    </div>
  );
};
CardItems.propTypes = {
  cardItems: PropTypes.array.isRequired,
  inputValue: PropTypes.string.isRequired,
};
export default CardItems;
