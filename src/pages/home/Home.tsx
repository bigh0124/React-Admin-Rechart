import TopBox from "../../components/topBox/TopBox.tsx";
import ChartBox from "../../components/chartBox/ChartBox.tsx";
import {
  chartBoxUser,
  chartBoxRevenue,
  chartBoxProduct,
  chartBoxConversion,
  barChartBoxVisit,
  barChartBoxRevenue,
  pieChartdata,
  bigChartRevenue,
} from "../../data.tsx";
import "./home.scss";
import BarChartBox from "../../components/barChartBox/BarChartBox.tsx";
import PieChartBox from "../../components/pieChartBox/PieChartBox.tsx";
import BigChartBox from "../../components/bigChartBox/BigChartBox.tsx";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <ChartBox data={chartBoxUser} />
      </div>
      <div className="box box3">
        <ChartBox data={chartBoxRevenue} />
      </div>
      <div className="box box4">
        <PieChartBox data={pieChartdata} />
      </div>
      <div className="box box5">
        <ChartBox data={chartBoxProduct} />
      </div>
      <div className="box box6">
        <ChartBox data={chartBoxConversion} />
      </div>
      <div className="box box7">
        <BigChartBox data={bigChartRevenue} />
      </div>
      <div className="box box8">
        <BarChartBox data={barChartBoxVisit} />
      </div>
      <div className="box box9">
        <BarChartBox data={barChartBoxRevenue} />
      </div>
    </div>
  );
};

export default Home;
