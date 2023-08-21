import "./barChartBox.scss";
import { BarChart, Bar, ResponsiveContainer, Tooltip } from "recharts";

type Props = {
  data: {
    title: string;
    color: string;
    dataKey: string;
    chartData: object[];
  };
};

const BarChartBox = ({ data }: Props) => {
  return (
    <div className="barChartBox">
      <h1 className="title">{data.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={150} height={40} data={data.chartData}>
            <Tooltip />
            <Bar dataKey={data.dataKey} fill={data.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;
