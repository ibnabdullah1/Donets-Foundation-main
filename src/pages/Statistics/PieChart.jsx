import * as React from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

export default function PieArcLabel({ cardPercentage, donationPercentage }) {
  const data = [
    { value: donationPercentage, label: "Your Donation", color: "#FF444A" },
    { value: cardPercentage, label: "Total Donation", color: "#00C49F" },
  ];
  console.log(data);
  const size = {
    width: 600,
    height: 300,
  };
  return (
    <PieChart
      series={[
        {
          arcLabel: (item) => `${item.value}%`,
          arcLabelMinAngle: 10,
          data,
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
