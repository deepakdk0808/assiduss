import React, { useState, useEffect } from "react";
import * as d3 from "d3";

const LineChart = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState(
    selectedDate.getMonth() + 1
  );
  const [data, setData] = useState(
    generateRandomData(selectedDate, selectedMonth)
  );

  function generateRandomData(date, month) {
    const daysInMonth = new Date(date.getFullYear(), month, 0).getDate();
    return d3.range(daysInMonth).map(() => Math.random() * 50);
  }

  function renderChart(data) {
    const width = 400;
    const height = 200;

    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 21])
      .range([0, width]);
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([height, 0]);

    const line = d3
      .line()
      .x((d, i) => xScale(i))
      .y((d) => yScale(d));

    d3.select("#chartLine").selectAll("*").remove(); // Clear existing chart

    const svg = d3
      .select("#chartLine")
      .append("svg")
      .attr("width", width)
      .attr("height", height + 30);

    svg
      .append("path")
      .datum(data)
      .attr("d", line)
      .attr("fill", "none")
      .attr("stroke", "green");

    data.forEach((value, i) => {
      const day = i + 1;
      svg
        .append("text")
        .attr("x", xScale(i))
        .attr("y", height + 20)
        .attr("text-anchor", "middle")
        .style("font-size", "10px")
        .style("fill", "black")
        .text(` ${day}`);
    });
  }

  const updateChart = () => {
    const newData = generateRandomData(selectedDate, selectedMonth);
    setData(newData);
  };

  const handleMonthChange = (event) => {
    const selected = parseInt(event.target.value, 10);
    setSelectedMonth(selected);
    setSelectedDate(
      new Date(selectedDate.getFullYear(), selected - 1, selectedDate.getDate())
    );
    updateChart();
  };

  useEffect(() => {
    renderChart(data);
  }, [data]);

  return (
    <div>
      <div className="headingOfChart">
        Checking Account
        <button
          onClick={updateChart}
          style={{
            borderRadius: "4px",
            marginLeft:"150px",
            height:"30px",
            backgroundColor:"turquoise",
          }}
        >
          Manage
        </button>
        <label style={{ marginLeft: "10px" }}>Month Selector: </label>
        <select value={selectedMonth} onChange={handleMonthChange}>
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {new Date(2000, i, 1).toLocaleString("default", {
                month: "long",
              })}
            </option>
          ))}
        </select>
      </div>

      <hr />
      <div
        id="chartLine"
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          marginTop: "20px",
        }}
      ></div>
    </div>
  );
};

export default LineChart;
