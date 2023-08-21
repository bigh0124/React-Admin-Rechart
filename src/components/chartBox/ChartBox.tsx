import { Link } from "react-router-dom";
import "./chartBox.scss";
import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";

type Props = {
  data: {
    color: string;
    percentage: number;
    icon: string;
    title: string;
    number: number | string;
    dataKey: string;
    chartData: object[];
  };
};

const ChartBox = ({ data }: Props) => {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <img src={data.icon} alt="" />
          <span>{data.title}</span>
        </div>
        <h1>{data.number}</h1>
        <Link to="/" style={{ color: data.color }}>
          View All
        </Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart width={300} height={100} data={data.chartData}>
              <Tooltip />
              <Line type="natural" dataKey={data.dataKey} stroke={data.color} strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span className="percentage" style={{ color: data.percentage > 0 ? "green" : "red" }}>
            {data.percentage}%
          </span>
          <span className="duration">this month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
