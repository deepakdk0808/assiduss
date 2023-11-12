import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import FormDialog from "./PopUp";

const BarChart = () => {
  const data = [10, 20, 15, 25, 18, 30]; // Sample data for 6 months
  const hasRendered = useRef(false);

  useEffect(() => {
    const width = 400;
    const height = 200;

    const months = [
      "older",
      "Jan01-08",
      "Jan09-16",
      "Jan17-24",
      "Jan25-31",
      "Future",
    ]; // Month names

    const xScale = d3.scaleBand().domain(months).range([0, width]).padding(0.6);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([height, 0]);

    const svg = d3.select("#chartBar").select("svg");

    // Clear existing chart
    svg.selectAll("*").remove();

    // Draw the bars
    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => xScale(months[i]))
      .attr("y", (d) => yScale(d))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => height - yScale(d))
      .attr("fill", "green");

    // Draw x-axis
    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(xScale))
      .selectAll("text")
      .attr("dy", ".8em")
      .attr("transform", "rotate(0)")
      .style("text-anchor", "end")
      .attr("dx", "1em")
      .text((d,i) => months[i]);
  }, [data, hasRendered]); // Include hasRendered in the dependency array

  useEffect(() => {
    hasRendered.current = true; // Set hasRendered to true after the initial render
  }, []);

  return (
    <div id="chartBar" className="chartBar">
      <div className="headingOfChart">
        Invoices Owed To You
        <FormDialog/>
      </div>
      
      {/* <button
        style={{
          height: "30px",
          borderRadius: "10px",
          marginTop:"-55px"
        }}
      >
        New Sales Invoice
      </button> */}
      <hr />
      <svg width="400" height="230"></svg>
    </div>
  );
};

export default BarChart;
