import { Link } from "react-router-dom";

const DonationCard = ({ donationItem }) => {
  const {
    id,
    image_card,
    price,
    text_button_bg_color,
    category_bg_color,
    title,
    category,
    card_bg_color,
  } = donationItem || {};

  return (
    <div
      style={{ background: card_bg_color }}
      className="flex gap-3 rounded-lg"
    >
      <div className="h-full w-[250px] md:w-[280px] lg:w-[280px]">
        <img
          className="h-full w-[250px] md:w-[280px] lg:w-[280px]"
          src={image_card}
          alt=""
        />
      </div>
      <div className=" flex justify-center items-center">
        <div className="p-4">
          <h4
            style={{
              background: category_bg_color,
              color: text_button_bg_color,
            }}
            className="w-24 flex justify-center items-center font-semibold py-1 rounded-md px-2"
          >
            {category}
          </h4>
          <h2 className="font-bold md:text-2xl  text-lg text-black my-2">
            {title}
          </h2>
          <h3
            style={{
              color: text_button_bg_color,
            }}
            className="font-bold text-lg mb-3"
          >
            ${price}
          </h3>
          <Link to={`/cards/${id}`}>
            <button
              style={{
                background: text_button_bg_color,
              }}
              className="text-white px-3 py-1 rounded-md text-base font-semibold"
            >
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
