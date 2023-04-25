import React, { useState, useEffect } from "react";
import { Chart } from "../data/Chart";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";

ChartJS.register(LineElement, LinearScale, CategoryScale, PointElement, Filler);

export default function SalesOverview() {
  const [chartData, setChartData] = useState(Chart);
  const [chartType, setChartType] = useState("7days");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchChartData(chartType);
      setChartData(data);
    };
    fetchData();
  }, [chartType]);

  const fetchChartData = async (type: string) => {
    const labels = Chart.labels;
    const data = Chart.datasets[0].data;

    if (type === "7days") {
      for (let i = 0; i < 7; i++) {
        data.push(Math.floor(Math.random() * 100));
      }
    } else if (type === "30days") {
      for (let i = 0; i < 30; i++) {
        data.push(Math.floor(Math.random() * 100));
      }
    }
    return {
      labels: labels.reverse(),
      datasets: [
        {
          data: data.reverse(),
          borderColor: "#EF2C5A",
          pointBorderColor: "transparent",
          ponitBorderWidth: 4,
          fill: true,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
        },
      ],
    };
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },

      y: {
        min: 2,
        ticks: {
          stepSize: 2,
          callback: (value: any) => value + ",000",
        },
      },
    },
  };

  return (
    <>
      <Container>
        <BoxA>
          <div>Sales overview</div>
        </BoxA>
        <BoxB>2</BoxB>
        <BoxC>3</BoxC>
        <BoxD>4</BoxD>
        <BoxE>
          <div className="button-container">
            <button onClick={() => setChartType("7days")}>7 Days</button>
            <button onClick={() => setChartType("30days")}>30 Days</button>
          </div>
          <div className="line-container">
            <Line data={chartData} options={options}></Line>
          </div>
        </BoxE>
        <BoxF>
          <span>
            KlashaWire - send money to businesses globally from Africa
          </span>
          <div>Send a Wire</div>
        </BoxF>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const BoxA = styled.div`
  border: 1px solid var(--color-primary-50);
  border-radius: 10px;
  grid-column: 1/3;
  grid-row: 1/2;
  width: 250px;
  height: 240px;
  position: relative;

  div {
    position: absolute;
    margin-top: -30px;
    left: 0;
    top: 0;
  }

  @media only screen and (max-width: 1100px) {
    width: 400px;
    grid-column: 1/6;
  }

  @media only screen and (max-width: 900px) {
    grid-column: 1/12;
    width: 600px;
  }
  @media only screen and (max-width: 650px) {
    width: 350px;
    grid-row: 1/2;
  }
`;

const BoxB = styled.div`
  border: 1px solid var(--color-primary-50);
  border-radius: 10px;
  grid-column: 4/5;
  grid-row: 1/2;
  width: 250px;
  height: 240px;
  @media only screen and (max-width: 1100px) {
    width: 400px;
    grid-column: 6/12;
  }

  @media only screen and (max-width: 900px) {
    grid-column: 1/12;
    grid-row: 3/4;
    width: 600px;
  }

  @media only screen and (max-width: 650px) {
    width: 350px;
    grid-row: 2/3;
  }
`;

const BoxC = styled.div`
  border: 1px solid var(--color-primary-50);
  border-radius: 10px;
  grid-column: 7/9;
  grid-row: 1/2;
  width: 250px;
  height: 240px;
  @media only screen and (max-width: 1100px) {
    grid-column: 1/6;
    grid-row: 3/4;
    width: 400px;
  }

  @media only screen and (max-width: 900px) {
    grid-column: 1/12;
    grid-row: 5/4;
    width: 600px;
  }

  @media only screen and (max-width: 650px) {
    width: 350px;
    grid-row: 3/4;
  }
`;
const BoxD = styled.div`
  border: 1px solid var(--color-primary-50);
  border-radius: 10px;
  grid-column: 10/12;
  grid-row: 1/2;
  width: 250px;
  height: 240px;
  @media only screen and (max-width: 1100px) {
    grid-column: 6/12;
    grid-row: 3/4;
    width: 400px;
  }

  @media only screen and (max-width: 900px) {
    grid-column: 1/12;
    grid-row: 6/7;
    width: 600px;
  }

  @media only screen and (max-width: 650px) {
    width: 350px;
    grid-row: 4/5;
  }
`;
const BoxE = styled.div`
  border: 1px solid var(--color-primary-50);
  border-radius: 10px;
  height: 300px;
  grid-column: 1/9;
  grid-row: 10/12;
  padding: 10px;
  position: relative;

  .button-container {
    position: absolute;
    margin-top: -30px;
    left: 0;
    top: 0;
  }

  .line-container {
    width: 100%;
    height: 270px;
    display: flex;
    justify-content: center;
  }

  @media only screen and (max-width: 1100px) {
    grid-column: 1/12;
    grid-row: 7/8;
  }

  @media only screen and (max-width: 900px) {
    grid-column: 1/12;
    grid-row: 8/9;
  }
  @media only screen and (max-width: 650px) {
    width: 350px;
    grid-row: 7/8;
  }
`;
const BoxF = styled.div`
  border: 1px solid var(--color-primary-50);
  border-radius: 10px;
  grid-column: 10/12;
  grid-row: 10/12;
  height: 300px;
  width: 250px;
  background: var(--color-primary-200);
  padding: 10px;
  color: var(--color-primary-300);
  font-size: 20px;

  div {
    color: var(--color-primary-300);
    text-align: center;
    background: var(--color-primary-50);
    cursor: pointer;
    width: 100px;
    padding: 5px;
    border-radius: 10px;
    font-size: 14px;
    padding: 10px;
    margin-top: 150px;
  }

  span {
    display: block;
    padding-top: 20px;
  }

  @media only screen and (max-width: 1100px) {
    grid-row: 8/12;
    grid-column: 1/3;
    width: 400px;
  }

  @media only screen and (max-width: 900px) {
    grid-column: 1/12;
    grid-row: 10/12;
    width: 600px;
  }

  @media only screen and (max-width: 650px) {
    width: 350px;
    grid-row: 8/12;
  }
`;
