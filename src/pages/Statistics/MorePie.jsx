import * as React from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

export default function PieArcLabel2({ cardPercentage, donationPercentage }) {
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
          textSize: "10px",
        },
      }}
      {...size}
    />
  );
}
