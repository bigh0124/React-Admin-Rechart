import "./bigChartBox.scss";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

type Props = {
  data: {
    name: string;
    books: number;
    clothes: number;
    electronic: number;
  }[];
};

const BigChartBox = ({ data }: Props) => {
  return (
    <div className="bigChartBox">
      <h1>Revenue Analytics</h1>
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey={Object.keys(data[0])[1]} stackId="1" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey={Object.keys(data[0])[2]} stackId="1" stroke="#82ca9d" fill="#82ca9d" />
            <Area type="monotone" dataKey={Object.keys(data[0])[3]} stackId="1" stroke="#ffc658" fill="#ffc658" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;
