import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import ReactApexChart from "react-apexcharts";
import { tokens } from "../../theme";

export default function ReactApexChartComponent({
  options,
  series,
  type,
  height,
  width,
}) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Box>
        <ReactApexChart
          options={options}
          series={series}
          type={type}
          height={height}
          width={width}
          style={{
            color: colors.grey[400],
          }}
        />
      </Box>
    </>
  );
}
