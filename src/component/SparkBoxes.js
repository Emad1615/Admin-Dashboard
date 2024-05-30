import { useTheme } from "@emotion/react";
import { tokens } from "../theme";
import { Box } from "@mui/material";
import ReactApexChart from "react-apexcharts";
import { useState } from "react";

export default function SparkBoxes({
  options,
  series,
  type,
  height,
  width,
  BackgroundImage,
  Title,
  NoData,
}) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Box
        className="w-full p-3 shadow-md rounded-lg mb-3"
        style={{
          backgroundImage: `${BackgroundImage}`,
        }}
      >
        <Box className="flex flex-row justify-start items-center gap-3">
          <Box>
            <p className="font-semibold m-1 text-xs text-muted">{NoData}</p>
            <p className="font-extrabold uppercase m-1 text-muted">{Title}</p>
          </Box>
          <Box>
            <ReactApexChart
              style={{ color: colors.grey[400] }}
              options={options}
              series={series}
              type={type}
              height={height}
              width={width}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
