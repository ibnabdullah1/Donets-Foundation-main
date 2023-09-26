import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import PropTypes from "prop-types";

const PieArcLabel = ({ cardPercentage, donationPercentage }) => {
  const data = [
    { value: donationPercentage, label: "Your Donation", color: "#FF444A" },
    { value: cardPercentage, label: "Total Donation", color: "#00C49F" },
  ];

  const size = {
    width: 500,
    height: 350,
  };

  return (
    <PieChart
      series={[
        {
          arcLabel: (item) => `${item.value}%`,
          arcLabelMinAngle: 10,
          data,
          startAngle: -270,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: "white",
          fontWeight: "bold",
          fontSize: "10px",
        },
      }}
      {...size}
    />
  );
};

PieArcLabel.propTypes = {
  cardPercentage: PropTypes.number,
  donationPercentage: PropTypes.number,
};

export default PieArcLabel;
