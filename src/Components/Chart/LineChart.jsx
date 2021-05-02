import React from "react";
import { Line } from "react-chartjs-2";

function LineChart() {
  const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Total Payment (K)",
        data: [26, 31, 29, 38, 25, 39.5, 50],
        fill: false,
        borderColor: ["rgba(0, 193, 77, 1)"],
        backgroundColor: ["rgba(235, 249, 241, 1)"],
        pointBackgroundColor: ["rgba(0, 193, 77, 1)"],
        pointBorderColor: ["rgba(0, 193, 77, 1)"],
      },
      {
        label: "Total Default (k)",
        data: [10, 20, 17, 20, 18, 30, 25],
        fill: false,
        borderColor: ["rgba(157, 0, 0, 1)"],
        backgroundColor: ["rgba(157, 0, 0, 1)"],
        pointBorderColor: ["rgba(256,256,256)"],
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
}

export default LineChart;
