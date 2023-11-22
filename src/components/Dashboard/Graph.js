import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const options = {
  scales: {
    x: {
      border: {
        color: "#FFFFFF",
      },
    },
    y: {
      border: {
        color: "#FFFFFF",
      },
      ticks: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

function Graph({ admin }) {
  const [GraphData, setGraphData] = useState({
    datasets: [],
  });
  useEffect(() => {
    setGraphData({
      labels: Object.keys(admin?.amount)?.map((value) =>
        value === "category_6" ? "custom" : value.replace("_", " ")
      ),
      datasets: [
        {
          label: "Amount",
          data: Object.keys(admin?.amount)?.map(
            (value) => admin?.amount[value]
          ),

          backgroundColor: ["#F0C3F1"],
        },
      ],
    });
  }, [admin?.amount["category_6"]]);

  return (
    <div className="h-[300px] flex justify-center items-center mt-8">
      <Bar redraw={true} data={GraphData} options={options} />
    </div>
  );
}

export default Graph;
