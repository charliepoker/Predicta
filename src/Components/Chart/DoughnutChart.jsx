import React from "react";
import { Doughnut } from "react-chartjs-2";

function DoughnutChart() {
  const data = {
    labels: ["white", "Accent"],
    datasets: [
      {
        label: "My First Dataset",
        data: [50, 50],
        backgroundColor: ["rgb(225, 225, 225)", "rgba(0, 193, 77, 1)"],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <div>
      <Doughnut data={data} />
    </div>
  );
}

export default DoughnutChart;
