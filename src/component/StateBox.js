import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { FaArrowTrendUp } from "react-icons/fa6";
import { tokens } from "../theme";

export default function StateBox({
  Option,
  Series,
  type,
  height,
  width,
  Title,
  NoData,
  perData,
  capData,
}) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Box
        className="w-full p-3 shadow-md rounded-lg"
        style={{
          backgroundColor: `${
            theme.palette.mode === "light" ? "white" : colors.primary[400]
          }`,
        }}
      >
        <Box className="flex flex-row justify-start items-center gap-3">
          <Box>
            <ReactApexChart
              options={Option}
              series={Series}
              type={type}
              height={height}
              width={width}
            />
          </Box>
          <Box>
            <p className="m-0">{Title}</p>
            <h5 className="m-0">2.2k</h5>
            <p>
              <span style={{ color: colors.greenAccent[400] }}>{NoData}</span>
              <FaArrowTrendUp
                className="inline-block ml-2 mr-2"
                style={{ color: colors.greenAccent[400] }}
              />
              {capData}
            </p>
          </Box>
        </Box>
      </Box>
    </>
  );
}
