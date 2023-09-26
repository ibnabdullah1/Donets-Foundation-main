import { Link } from "react-router-dom";
import "./Card.css";
import swal from "sweetalert";
import PropTypes from "prop-types";
const CardItemDetailsCard = ({ cardDetails }) => {
  const { id, image, price, text_button_bg_color, title, description } =
    cardDetails || {};

  const handleAddToDonation = () => {
    const donationStoredArray = [];
    const donationItems = JSON.parse(localStorage.getItem("donations"));

    if (!donationItems) {
      donationStoredArray.push(cardDetails);
      localStorage.setItem("donations", JSON.stringify(donationStoredArray));
      swal("Good job!", "Donation added successfully!", "success");
    } else {
      const isExits = donationItems.find(
        (cardDetails) => parseInt(cardDetails.id) === id
      );
      if (!isExits) {
        donationStoredArray.push(...donationItems, cardDetails);
        localStorage.setItem("donations", JSON.stringify(donationStoredArray));
        swal("Good job!", "Donation added successfully!", "success");
      } else {
        swal("Error!", "No duplicate !", "error");
      }
    }
  };

  return (
    <div className="0 px-4 md:px-7 lg:px-10 ">
      <div className="  relative mb-5 ">
        <img className="w-full radius" src={image} alt="" />
        <div className="rgba p-3 lg:p-8 overflow-hidden absolute bottom-0 w-full">
          <Link>
            <button
              onClick={handleAddToDonation}
              style={{ background: text_button_bg_color }}
              className="text-white  font-bold py-2 px-4 rounded-md"
            >
              Donate ${price}
            </button>
          </Link>
        </div>
      </div>
      <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-3">
        {title}
      </h2>
      <p className="text-gray-800"> {description}</p>
    </div>
  );
};
CardItemDetailsCard.propTypes = {
  cardDetails: PropTypes.object.isRequired,
};
export default CardItemDetailsCard;

/* */
