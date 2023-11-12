import LineChart from "./LineChart";
import BarChart from "./BarChart";
import { useState } from "react";
import StackedBarChart from "./StackedBarChart";

const Charts = () => {
   const [loading, setLoading] = useState(false);
   setTimeout(() => {
     setLoading(true);
   }, 500);
  return (
    <div className="charts-box">
      <div>{loading ? <LineChart /> : "chart1"}</div>
      <div>{loading ? <BarChart /> : "chart2"}</div>
      <div>{loading ? <StackedBarChart /> : "chart3"}</div>
      <div>
        <div className="headingOfChart">Account Watch List</div>
        <hr />
        <div className="Accounts">
          <div className="acc-heading">
            <h4>Account</h4>
            <span>Sales</span>
            <span>Inventory</span>
            <span>Advertising</span>
            <span>Entertainment</span>
            <span>Product</span>
          </div>
          <div className="acc-month">
            <h4>This Month</h4>
            <span>1,194,00</span>
            <span>6,87,99</span>
            <span>4,692</span>
            <span>0.00</span>
            <span>462.5</span>
          </div>
          <div className="acc-value">
            <h4>YTD</h4>
            <span>1,194,00</span>
            <span>6,87,99</span>
            <span>4,692</span>
            <span>0.00</span>
            <span>462.5</span>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Charts;




