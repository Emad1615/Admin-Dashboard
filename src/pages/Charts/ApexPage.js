import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import ReactApexChartComponent from "../../component/charts/ReactApexChartComponent";
import {
  BarChartData,
  ColumnChartData,
  CustomAngleCircle,
  DistributedColumnsData,
  DonutChartData,
  LineWithDataLabels,
  PieChartData,
  SplineArea,
  StackedColumns,
  polarAreaData,
} from "../../data/ChartData";
import TitlePage from "../../component/TitlePage";

export default function ApexPage() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Box>
        <TitlePage Title={"Apex Charts"} />
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
              Line, Column & Area Chart
            </h6>
            <ReactApexChartComponent
              options={ColumnChartData.options}
              series={ColumnChartData.series}
              type={ColumnChartData.options.chart.type}
              height={ColumnChartData.options.chart.height}
              width={ColumnChartData.options.chart.width}
            />
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
              className={`font-semibold text-sm mb-3 ${
                theme.palette.mode === "light" && "text-muted"
              }`}
            >
              Distributed Columns
            </h6>
            <ReactApexChartComponent
              options={DistributedColumnsData.options}
              series={DistributedColumnsData.series}
              type={DistributedColumnsData.options.chart.type}
              height={DistributedColumnsData.options.chart.height}
              width={DistributedColumnsData.options.chart.width}
            />
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
              className={`font-semibold text-sm mb-3 ${
                theme.palette.mode === "light" && "text-muted"
              }`}
            >
              Line
            </h6>
            <ReactApexChartComponent
              options={LineWithDataLabels.options}
              series={LineWithDataLabels.series}
              type={LineWithDataLabels.options.chart.type}
              height={LineWithDataLabels.options.chart.height}
              width={LineWithDataLabels.options.chart.width}
            />
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
              className={`font-semibold text-sm mb-3 ${
                theme.palette.mode === "light" && "text-muted"
              }`}
            >
              Spline Area
            </h6>{" "}
            <ReactApexChartComponent
              options={SplineArea.options}
              series={SplineArea.series}
              type={SplineArea.options.chart.type}
              height={SplineArea.options.chart.height}
              width={SplineArea.options.chart.width}
            />
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
              className={`font-semibold text-sm mb-3 ${
                theme.palette.mode === "light" && "text-muted"
              }`}
            >
              Stacked Columns
            </h6>
            <ReactApexChartComponent
              options={StackedColumns.options}
              series={StackedColumns.series}
              type={StackedColumns.options.chart.type}
              height={StackedColumns.options.chart.height}
              width={StackedColumns.options.chart.width}
            />
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
              className={`font-semibold text-sm mb-3${
                theme.palette.mode === "light" && "text-muted"
              }`}
            >
              Bar Chart
            </h6>
            <ReactApexChartComponent
              options={BarChartData.options}
              series={BarChartData.series}
              type={BarChartData.options.chart.type}
              height={BarChartData.options.chart.height}
              width={BarChartData.options.chart.width}
            />
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
              className={`font-semibold text-sm mb-3${
                theme.palette.mode === "light" && "text-muted"
              }`}
            >
              Pie Chart
            </h6>
            <ReactApexChartComponent
              options={PieChartData.options}
              series={PieChartData.series}
              type={PieChartData.options.chart.type}
              height={PieChartData.options.chart.height}
              width={PieChartData.options.chart.width}
            />
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
              className={`font-semibold text-sm mb-3${
                theme.palette.mode === "light" && "text-muted"
              }`}
            >
              Donut Chart
            </h6>
            <ReactApexChartComponent
              options={DonutChartData.options}
              series={DonutChartData.series}
              type={DonutChartData.options.chart.type}
              height={DonutChartData.options.chart.height}
              width={DonutChartData.options.chart.width}
            />
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
              className={`font-semibold text-sm ${
                theme.palette.mode === "light" && "text-muted"
              }`}
            >
              Polar Area
            </h6>
            <ReactApexChartComponent
              options={polarAreaData.options}
              series={polarAreaData.series}
              type={polarAreaData.options.chart.type}
              height={polarAreaData.options.chart.height}
              width={polarAreaData.options.chart.width}
            />
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
              className={`font-semibold text-sm mb-3${
                theme.palette.mode === "light" && "text-muted"
              }`}
            >
              Radial bars
            </h6>
            <ReactApexChartComponent
              options={CustomAngleCircle.options}
              series={CustomAngleCircle.series}
              type={CustomAngleCircle.options.chart.type}
              height={CustomAngleCircle.options.chart.height}
              width={CustomAngleCircle.options.chart.width}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
