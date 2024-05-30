import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import TitlePage from "../../component/TitlePage";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";
import StateBox from "../../component/StateBox";
import { StatData } from "./../../data/StateboxData";
import SparkBoxes from "../../component/SparkBoxes";
import { SparkData } from "./../../data/SparkBoxeData";
import { ColumnChartData, radialBarData } from "./../../data/ChartData";
import { messageExamples } from "./../../data/MessageData";
import { ProgressStatsData } from "./../../data/ProgressStatData";

import Grid from "@mui/material/Unstable_Grid2";
import ReactApexChartComponent from "../../component/charts/ReactApexChartComponent";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import ProgressStats from "../../component/ProgressStats";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegTimesCircle } from "react-icons/fa";
import DataTableComponent from "../../component/TableComponent";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Bar, Chart } from "react-chartjs-2";
import { BarOptions, MultitypeData, VBarData } from "../../data/ChartJSData";
import { isMobile } from "react-device-detect";
import { useState } from "react";
import { useEffect } from "react";

export default function Index() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobileView, setIsMobileView] = useState(isMobile);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    setIsMobileView(isMobile);
  }, [width]);
  return (
    <>
      <Box>
        <TitlePage Title={"Dashboard"} />

        <Box className="grid lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-3">
          {StatData.map((data, idx) => (
            <StateBox
              key={idx}
              Option={data.options}
              Series={data.series}
              type={data.options.chart.type}
              Title={data.Title}
              NoData={data.NoData}
              capData={data.capData}
              height={data.options.chart.height}
              width={data.options.chart.width}
            />
          ))}
        </Box>

        <Box className="mt-4 ml-3">
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 3 }}
          >
            <Grid container rowSpacing={1} xs={12} sm={12} md={8} lg={9} xl={9}>
              <Box
                className="w-full p-3 shadow-md rounded-lg "
                style={{
                  backgroundColor: `${
                    theme.palette.mode === "light"
                      ? "white"
                      : colors.primary[400]
                  }`,
                }}
              >
                <Box
                  display={"flex"}
                  flexDirection={"row"}
                  justifyContent={"space-between"}
                  alignItems={"start"}
                  marginBottom={"20px"}
                >
                  <h6
                    className={`font-semibold text-sm ${
                      theme.palette.mode === "light" && "text-muted"
                    }`}
                  >
                    Overview
                  </h6>
                  <Box>
                    <ButtonGroup
                      color="secondary"
                      size="small"
                      variant="outlined"
                      aria-label="small outlined button group"
                    >
                      <Button>All</Button>
                      <Button>Year</Button>
                      <Button>Month</Button>
                      <Button>Day</Button>
                    </ButtonGroup>
                  </Box>
                </Box>
                {!isMobileView ? (
                  // <Bar options={BarOptions} data={VBarData} height={100} />
                  <Chart type="bar" data={MultitypeData} height={90} />
                ) : (
                  // <Bar options={BarOptions} data={VBarData} />
                  <Chart type="bar" data={MultitypeData} />
                )}

                {/* <ReactApexChartComponent
                  options={ColumnChartData.options}
                  series={ColumnChartData.series}
                  type={ColumnChartData.options.chart.type}
                  height={ColumnChartData.options.chart.height}
                  width={ColumnChartData.options.chart.width}
                /> */}
              </Box>
            </Grid>

            <Grid xs={12} sm={12} md={4} lg={3} xl={3}>
              {SparkData.map((data, idx) => (
                <SparkBoxes
                  key={idx}
                  options={data.options}
                  series={data.series}
                  type={data.options.chart.type}
                  height={data.options.chart.height}
                  width={data.options.chart.width}
                  BackgroundImage={data.BackgroundImage}
                  Title={data.Title}
                  NoData={data.NoData}
                />
              ))}
            </Grid>
          </Grid>
        </Box>
        <Box className="mt-4 ">
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 3 }}
          >
            <Grid container rowSpacing={1} xs={12} sm={12} md={8} lg={9} xl={9}>
              <Grid s={12} sm={12} md={6} lg={6}>
                <Box
                  className="w-full p-3 shadow-md rounded-lg "
                  style={{
                    backgroundColor: `${
                      theme.palette.mode === "light"
                        ? "white"
                        : colors.primary[400]
                    }`,
                  }}
                >
                  <h6
                    className={`font-semibold text-sm ${
                      theme.palette.mode === "light" && "text-muted"
                    }`}
                  >
                    Social Source
                  </h6>
                  <ReactApexChartComponent
                    options={radialBarData.options}
                    series={radialBarData.series}
                    type={radialBarData.options.chart.type}
                    height={radialBarData.options.chart.height}
                    width={radialBarData.options.chart.width}
                  />
                  <Box className="grid grid-cols-3">
                    <Box className="flex flex-col justify-center items-center">
                      <FaFacebook
                        className="text-2xl"
                        style={{ color: "#249efa" }}
                      />
                      <p className="font-semibold p-2 m-0">Facebook</p>
                      <small className="font-medium p-0">{`${radialBarData.series[0]}%`}</small>
                    </Box>
                    <Box
                      className={`flex flex-col justify-center items-center ${
                        theme.palette.mode === "light" && "border-r border-l"
                      }`}
                    >
                      <FaTwitter
                        className="text-2xl "
                        style={{ color: "#24e6a4" }}
                      />
                      <p className="font-semibold p-2 m-0">Twitter</p>
                      <small className="font-medium p-0">{`${radialBarData.series[1]}%`}</small>
                    </Box>
                    <Box className="flex flex-col justify-center items-center">
                      <FaInstagram
                        className="text-2xl "
                        style={{ color: "#fdba3a" }}
                      />
                      <p className="font-semibold p-2 m-0">Instagram</p>
                      <small className="font-medium p-0">{`${radialBarData.series[2]}%`}</small>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid s={12} sm={12} md={6} lg={6}>
                <Box
                  className="w-full p-4 shadow-md rounded-lg "
                  style={{
                    backgroundColor: `${
                      theme.palette.mode === "light"
                        ? "white"
                        : colors.primary[400]
                    }`,
                    height: "469px",
                  }}
                >
                  <h6
                    className={`font-semibold text-sm ${
                      theme.palette.mode === "light" && "text-muted"
                    }`}
                  >
                    Order Stats
                  </h6>
                  {ProgressStatsData.map((data, idx) => (
                    <ProgressStats
                      key={idx}
                      backgroundColor={data.backgroundColor}
                      Icon={data.Icon}
                      State={data.State}
                      PercentageState={data.PercentageState}
                    />
                  ))}
                  <Box className="grid grid-cols-3 mt-5">
                    <Box className="flex flex-col justify-center items-center">
                      <FaRegCheckCircle
                        className="text-2xl"
                        style={{ color: "#0ac074" }}
                      />
                      <p className="font-semibold p-2 m-0">
                        {ProgressStatsData[0].State}
                      </p>
                      <small className="font-medium p-0">
                        {ProgressStatsData[0].PercentageState}
                      </small>
                    </Box>
                    <Box
                      className={`flex flex-col justify-center items-center ${
                        theme.palette.mode === "light" && "border-r border-l"
                      }`}
                    >
                      <FaCalendarAlt
                        className="text-2xl "
                        style={{ color: "#fcb92c" }}
                      />
                      <p className="font-semibold p-2 m-0">
                        {ProgressStatsData[1].State}
                      </p>
                      <small className="font-medium p-0">
                        {ProgressStatsData[1].PercentageState}
                      </small>
                    </Box>
                    <Box className="flex flex-col justify-center items-center">
                      <FaRegTimesCircle
                        className="text-2xl "
                        style={{ color: "#ff3d60" }}
                      />
                      <p className="font-semibold p-2 m-0">
                        {ProgressStatsData[2].State}
                      </p>
                      <small className="font-medium p-0">
                        {ProgressStatsData[2].PercentageState}
                      </small>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            <Grid xs={12} sm={12} md={4} lg={3} xl={3}>
              <Box
                className="w-full p-4 shadow-md rounded-lg "
                style={{
                  backgroundColor: `${
                    theme.palette.mode === "light"
                      ? "white"
                      : colors.primary[400]
                  }`,
                }}
              >
                <Box>
                  <h6
                    className={`font-semibold text-sm ${
                      theme.palette.mode === "light" && "text-muted"
                    }`}
                  >
                    Messages
                  </h6>
                  <List
                    sx={{
                      overflow: "auto",
                      height: "395px",
                      padding: "0 !important",
                      margin: "0px !important",
                    }}
                  >
                    {messageExamples.map(
                      ({ primary, secondary, person }, index) => (
                        <ListItem button key={index + person}>
                          <ListItemAvatar>
                            <Avatar alt="Profile Picture" src={person} />
                          </ListItemAvatar>
                          <ListItemText
                            primary={primary}
                            secondary={secondary}
                          />
                        </ListItem>
                      )
                    )}
                  </List>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box className="mt-4">
          <Box
            className="w-full p-3 shadow-md rounded-lg "
            style={{
              backgroundColor: `${
                theme.palette.mode === "light" ? "white" : colors.primary[400]
              }`,
            }}
          >
            <DataTableComponent />
          </Box>
        </Box>
      </Box>
    </>
  );
}
