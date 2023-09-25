import { Link } from "react-router-dom";

const CardItemsCard = ({ cardItem }) => {
  const {
    id,
    image,
    title,
    category,
    card_bg_color,
    category_bg_color,
    text_button_bg_color,
  } = cardItem;

  return (
    <Link to={`/cards/${id}`}>
      <div
        style={{ background: card_bg_color }}
        className="relative flex  flex-col rounded-lg  bg-clip-border  "
      >
        <div className="relative  overflow-hidden   bg-clip-border">
          <img src={image} className="h-full w-full object-cover" />
        </div>
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
          <h2
            style={{
              color: text_button_bg_color,
            }}
            className="font-bold text-lg"
          >
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default CardItemsCard;
