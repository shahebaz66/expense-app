import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const options = {
  responsive: true,
  maintainAspectRatio: false,
  title: {
    display: true,
    text: "Average Rainfall per month",
    fontSize: 20,
  },
  legend: {
    display: true,
    position: "right",
  },
};
type IChartData = {
  labels: string[];
  datasets: {
    label: string;
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
    data: string[];
  }[];
};

function Home() {
  const transaction = useSelector((state: any) => state.transaction);
  const categories = useSelector((state: any) => state.category);
  const [chartState, setChartState] = useState<IChartData>();
  useEffect(() => {
    const data: any = {};
    if (Object.values(transaction).length > 0) {
      Object.values(transaction).map((key: any) => {
        if (data[key.category]) {
          data[key.category] += Number(key.amount);
        } else {
          data[key.category] = Number(key.amount);
        }
      });
      const state: any = {
        labels: Object.keys(data),
        datasets: [
          {
            label: "categories amount in transaction",
            backgroundColor: "rgba(75,192,192,1)",
            borderColor: "rgba(0,0,0,1)",
            borderWidth: 2,
            data: Object.values(data),
          },
        ],
      };
      setChartState(state);
    }
  }, [transaction]);
  console.log(chartState);

  return (
    <div>
      {chartState ? (
        <div style={{ height: "50vh" }}>
          <Bar data={chartState} options={options} />
        </div>
      ) : null}
      <div className="mb-3 p-3">
        <label className="form-label">transaction table</label>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">category</th>
              <th scope="col">label</th>
              <th scope="col">date</th>
              <th scope="col">amount</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(transaction).map((i, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{i}</th>
                  <td>{transaction[i].category}</td>
                  <td>{transaction[i].label}</td>
                  <td>{transaction[i].date}</td>
                  <td>{transaction[i].amount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <hr />
      <div className="mb-3 p-3">
        <label className="form-label">categories table</label>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">category name</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(categories).map((i, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{i}</th>
                  <td>{categories[i]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
