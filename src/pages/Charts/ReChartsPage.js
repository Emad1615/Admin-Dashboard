import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import TitlePage from "../../component/TitlePage";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  ResponsiveContainer,
  BarChart,
  Bar,
  Rectangle,
  Scatter,
  ComposedChart,
  PieChart,
  Pie,
  RadialBarChart,
  RadialBar,
} from "recharts";
import {
  AreaChartFillByValue,
  LineBarAreaComposedChart,
  SimpleBarChart,
  SimpleLineChart,
  SimpleRadialBarChart,
  TwoLevelPieChart01,
  TwoLevelPieChart02,
} from "../../data/ReChartsData";
import { useProSidebar } from "react-pro-sidebar";
const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};
export default function ReChartsPage() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { collapsed } = useProSidebar();
  const gradientOffset = () => {
    const dataMax = Math.max(...AreaChartFillByValue.map((i) => i.uv));
    const dataMin = Math.min(...AreaChartFillByValue.map((i) => i.uv));

    if (dataMax <= 0) {
      return 0;
    }
    if (dataMin >= 0) {
      return 1;
    }

    return dataMax / (dataMax - dataMin);
  };

  const off = gradientOffset();
  return (
    <>
      <Box>
        <TitlePage Title={"Re Charts"} />
        <Box className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3">
          <Box
            className="w-full p-3 shadow-md rounded-lg "
            style={{
              backgroundColor: `${
                theme.palette.mode === "light" ? "white" : colors.primary[400]
              }`,
            }}
          >
            <h6
              className={`font-semibold text-sm mb-4 ${
                theme.palette.mode === "light" && "text-muted"
              }`}
            >
              Line Chart
            </h6>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart
                height={300}
                data={SimpleLineChart}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </Box>
          <Box
            className="w-full p-3 shadow-md rounded-lg "
            style={{
              backgroundColor: `${
                theme.palette.mode === "light" ? "white" : colors.primary[400]
              }`,
            }}
          >
            <h6
              className={`font-semibold text-sm mb-4 ${
                theme.palette.mode === "light" && "text-muted"
              }`}
            >
              Stacked Bar Chart
            </h6>
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart
                height={300}
                data={AreaChartFillByValue}
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
                <defs>
                  <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                    <stop offset={off} stopColor="green" stopOpacity={1} />
                    <stop offset={off} stopColor="red" stopOpacity={1} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#000"
                  fill="url(#splitColor)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </Box>
          <Box
            className="w-full p-3 shadow-md rounded-lg "
            style={{
              backgroundColor: `${
                theme.palette.mode === "light" ? "white" : colors.primary[400]
              }`,
            }}
          >
            <h6
              className={`font-semibold text-sm mb-4 ${
                theme.palette.mode === "light" && "text-muted"
              }`}
            >
              Simple Bar Chart
            </h6>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                width={500}
                height={300}
                data={SimpleBarChart}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="pv"
                  fill="#8884d8"
                  activeBar={<Rectangle fill="pink" stroke="blue" />}
                />
                <Bar
                  dataKey="uv"
                  fill="#82ca9d"
                  activeBar={<Rectangle fill="gold" stroke="purple" />}
                />
              </BarChart>
            </ResponsiveContainer>
          </Box>
          <Box
            className="w-full p-3 shadow-md rounded-lg "
            style={{
              backgroundColor: `${
                theme.palette.mode === "light" ? "white" : colors.primary[400]
              }`,
            }}
          >
            <h6
              className={`font-semibold text-sm mb-4 ${
                theme.palette.mode === "light" && "text-muted"
              }`}
            >
              Line Bar Area Composed Chart
            </h6>
            <ResponsiveContainer width="100%" height={400}>
              <ComposedChart
                width={500}
                height={400}
                data={LineBarAreaComposedChart}
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="amt"
                  fill="#8884d8"
                  stroke="#8884d8"
                />
                <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                <Scatter dataKey="cnt" fill="red" />
              </ComposedChart>
            </ResponsiveContainer>
          </Box>
          <Box
            className="w-full p-3 shadow-md rounded-lg "
            style={{
              backgroundColor: `${
                theme.palette.mode === "light" ? "white" : colors.primary[400]
              }`,
            }}
          >
            <h6
              className={`font-semibold text-sm mb-4 ${
                theme.palette.mode === "light" && "text-muted"
              }`}
            >
              Two Level Pie Chart
            </h6>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart width={400} height={400}>
                <Pie
                  data={TwoLevelPieChart01}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  fill="#8884d8"
                />
                <Pie
                  data={TwoLevelPieChart02}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={90}
                  fill="#82ca9d"
                  label
                />
              </PieChart>
            </ResponsiveContainer>
          </Box>
          <Box
            className="w-full p-3 shadow-md rounded-lg "
            style={{
              backgroundColor: `${
                theme.palette.mode === "light" ? "white" : colors.primary[400]
              }`,
            }}
          >
            <h6
              className={`font-semibold text-sm mb-4 ${
                theme.palette.mode === "light" && "text-muted"
              }`}
            >
              Radial Bar Chart
            </h6>
            <ResponsiveContainer width="100%" height={400}>
              <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="10%"
                outerRadius="80%"
                barSize={10}
                data={SimpleRadialBarChart}
              >
                <RadialBar
                  minAngle={15}
                  label={{
                    position: "insideStart",
                    fill: "red",
                  }}
                  background
                  clockWise
                  dataKey="uv"
                />
                <Legend
                  iconSize={10}
                  layout="vertical"
                  verticalAlign="middle"
                  wrapperStyle={style}
                />
              </RadialBarChart>
            </ResponsiveContainer>
          </Box>
        </Box>
      </Box>
    </>
  );
}
