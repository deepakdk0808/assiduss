import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const StackedBarChart = () => {
  const data = [
    { month: "August", apples: 10, bananas: 5 },
    { month: "September", apples: 15, bananas: 8 },
    { month: "October", apples: 8, bananas: 12 },
    { month: "November", apples: 12, bananas: 10 },
    { month: "December", apples: 18, bananas: 15 },
    { month: "January", apples: 22, bananas: 18 },
  ];

  const svgRef = useRef(null);

  useEffect(() => {
    // Check if SVG element already exists
    const svgElement = svgRef.current;
    if (!svgElement) {
      // Set up the SVG container
      const svg = d3
        .select("#stacked-bar-chart")
        .append("svg")
        .attr("width", 600)
        .attr("height", 400)
        .append("g")
        .attr("transform", "translate(50,50)");

      // Save the SVG element to the ref
      svgRef.current = svg;

      // Define the stack function
      const stack = d3.stack().keys(["apples", "bananas"]);

      // Apply the stack function to the data
      const stackedData = stack(data);

      // Set up scales
      const xScale = d3
        .scaleBand()
        .domain(data.map((d) => d.month))
        .range([0, 500])
        .padding(0.5);

      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(stackedData[stackedData.length - 1], (d) => d[1])])
        .range([300, 0]);

      // Draw the stacked bars
      svg
        .selectAll("g")
        .data(stackedData)
        .enter()
        .append("g")
        .attr("fill", (d, i) => d3.schemeCategory10[i])
        .selectAll("rect")
        .data((d) => d)
        .enter()
        .append("rect")
        .attr("x", (d) => xScale(d.data.month))
        .attr("y", (d) => yScale(d[1]))
        .attr("height", (d) => yScale(d[0]) - yScale(d[1]))
        .attr("width", xScale.bandwidth());

      // Draw axes
      svg
        .append("g")
        .attr("transform", `translate(0, ${300})`)
        .call(d3.axisBottom(xScale));

    //   svg.append("g").call(d3.axisLeft(yScale));
    }
  }, [data]);

  return (
    <>
      <div>
        <div className="headingOfChart"
    
        >
          Total Cash Flow
        </div>
      </div>
      <hr />
      <div id="stacked-bar-chart">
        <div></div>
      </div>
    </>
  );
  
  
};

export default StackedBarChart;
