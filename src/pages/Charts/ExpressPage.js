import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import TitlePage from "../../component/TitlePage";
import DevExtreameChartComponent from "../../component/charts/DevExtreameChartComponent";
import {
  Series,
  CommonSeriesSettings,
  Legend,
  Export,
  Tooltip,
  Margin,
  Format,
  Label,
  Connector,
  ArgumentAxis,
  Aggregation,
  Grid,
  ValueAxis,
} from "devextreme-react/chart";
import {
  AreaData,
  AutoCalculatedBar,
  BubbleData,
  FullStackedBar,
  PointsAggregation,
  RangeBarData,
  populationByRegions,
} from "../../data/DevExtreameChartData";
import RangeSelector, {
  Size,
  Scale,
  Chart as RsChart,
  ValueAxis as RsValueAxis,
  Series as RsSeries,
  Aggregation as RsAggregation,
  Behavior,
  Border,
} from "devextreme-react/range-selector";
import { PieChart } from "devextreme-react";
export default function ExpressPage() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const palette = ["#00ced1", "#008000", "#ffd700", "#ff7f50"];
  function customizeTooltip(pointInfo) {
    return {
      text: `${pointInfo.point.tag}<br/>Total Population: ${pointInfo.argumentText}M<br/>Population with Age over 60: ${pointInfo.valueText}M (${pointInfo.size}%)`,
    };
  }
  function customizeText(e) {
    return `${e.value}M`;
  }
  return (
    <>
      <Box>
        <TitlePage Title={"Devextreme Charts"} />
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
              Bar
            </h6>
            <DevExtreameChartComponent
              title={""}
              dataSource={FullStackedBar}
              id={"FullStackedBarID"}
            >
              <CommonSeriesSettings
                argumentField="country"
                type="fullstackedbar"
              />
              <Series valueField="hydro" name="Hydro-electric" />
              <Series valueField="oil" name="Oil" />
              <Series valueField="gas" name="Natural gas" />
              <Series valueField="coal" name="Coal" />
              <Series valueField="nuclear" name="Nuclear" />

              <Legend
                verticalAlignment="bottom"
                horizontalAlignment="center"
                itemTextPosition="right"
              />
              <Export enabled={true} />
              <Tooltip enabled={true} />
            </DevExtreameChartComponent>
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
              Auto-Calculated Bar Width
            </h6>
            <DevExtreameChartComponent
              title={""}
              dataSource={AutoCalculatedBar}
              id={"AutoCalculateBarId"}
            >
              <CommonSeriesSettings
                argumentField="state"
                type="bar"
                ignoreEmptyPoints={true}
              />
              <Series valueField="oil" name="Oil Production" />
              <Series valueField="gas" name="Gas Production" />
              <Series valueField="coal" name="Coal Production" />
              <Legend verticalAlignment="bottom" horizontalAlignment="center" />
              <Export enabled={true} />
            </DevExtreameChartComponent>
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
              Area
            </h6>
            <DevExtreameChartComponent
              palette="Harmony Light"
              dataSource={AreaData}
              id={"AutoCalculateBarId"}
            >
              <CommonSeriesSettings
                argumentField="state"
                type="bar"
                ignoreEmptyPoints={true}
              />
              <CommonSeriesSettings argumentField="country" />
              <Series valueField="y1564" name="15-64 years"></Series>
              <Series valueField="y014" name="0-14 years"></Series>
              <Series valueField="y65" name="65 years and older"></Series>
              <Margin bottom={20} />
              <ArgumentAxis valueMarginsEnabled={false} />
              <Legend verticalAlignment="bottom" horizontalAlignment="center" />
              <Export enabled={true} />
            </DevExtreameChartComponent>
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
              Doughnut
            </h6>
            <PieChart
              id="pie"
              type="doughnut"
              palette="Soft Pastel"
              dataSource={populationByRegions}
            >
              <Series argumentField="region">
                <Label visible={true} format="millions">
                  <Connector visible={true} />
                </Label>
              </Series>
              <Export enabled={true} />
              <Legend
                margin={0}
                horizontalAlignment="right"
                verticalAlignment="top"
              />
              <Tooltip enabled={true}>
                <Format type="millions" />
              </Tooltip>
            </PieChart>
          </Box>
        </Box>
        <Box className="grid xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 mt-3">
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
              Points Aggregation
            </h6>
            <DevExtreameChartComponent
              title={""}
              dataSource={PointsAggregation}
              id={"PointsAggregationId"}
            >
              <Series
                type="candleStick"
                openValueField="Open"
                highValueField="High"
                lowValueField="Low"
                closeValueField="Close"
                argumentField="Date"
              >
                <Aggregation enabled={true} />
              </Series>
              <ArgumentAxis valueMarginsEnabled={false} argumentType="datetime">
                <Grid visible={true} />
                <Label visible={false} />
              </ArgumentAxis>
              <ValueAxis valueType="numeric" />
              <Margin right={10} />
              <Legend visible={false} />
              <Tooltip enabled={true} />
            </DevExtreameChartComponent>
            <RangeSelector dataSource={PointsAggregation}>
              <Size height={120} />
              <RsChart>
                <RsValueAxis valueType="numeric" />
                <RsSeries type="line" valueField="Open" argumentField="Date">
                  <RsAggregation enabled="true" />
                </RsSeries>
              </RsChart>
              <Scale
                placeholderHeight={20}
                minorTickInterval="day"
                tickInterval="month"
                valueType="datetime"
                aggregationInterval="week"
              />
              <Behavior snapToTicks={false} valueChangeMode="onHandleMove" />
            </RangeSelector>
          </Box>
        </Box>
        <Box className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-3">
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
              Range Bar
              <DevExtreameChartComponent
                title={""}
                palette={"Violet"}
                dataSource={RangeBarData}
                id={"PointsAggregationId"}
              >
                <Tooltip enabled={true}></Tooltip>
                <CommonSeriesSettings
                  argumentField="date"
                  type="rangebar"
                  minBarSize={2}
                />
                <Series
                  rangeValue1Field="aVal1"
                  rangeValue2Field="aVal2"
                  name="ANS West Coast"
                />
                <Series
                  rangeValue1Field="tVal1"
                  rangeValue2Field="tVal2"
                  name="West Texas Intermediate"
                />

                <ArgumentAxis>
                  <Label format="month" />
                </ArgumentAxis>
                <ValueAxis title="$ per barrel" />

                <Export enabled={true} />
                <Legend
                  verticalAlignment="bottom"
                  horizontalAlignment="center"
                />
              </DevExtreameChartComponent>
            </h6>
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
              Bubble
            </h6>
            <DevExtreameChartComponent
              title={""}
              palette={palette}
              dataSource={BubbleData}
              id={"PointsAggregationId"}
            >
              <Tooltip
                enabled={true}
                location="edge"
                customizeTooltip={customizeTooltip}
              />
              <CommonSeriesSettings type="bubble" />
              <ValueAxis title="Population with Age over 60">
                <Label customizeText={customizeText} />
              </ValueAxis>
              <ArgumentAxis title="Total Population">
                <Label customizeText={customizeText} />
              </ArgumentAxis>
              <Series
                name="Europe"
                argumentField="total1"
                valueField="older1"
                sizeField="perc1"
                tagField="tag1"
              />
              <Series
                name="Africa"
                argumentField="total2"
                valueField="older2"
                sizeField="perc2"
                tagField="tag2"
              />
              <Series
                name="Asia"
                argumentField="total3"
                valueField="older3"
                sizeField="perc3"
                tagField="tag3"
              />
              <Series
                name="North America"
                argumentField="total4"
                valueField="older4"
                sizeField="perc4"
                tagField="tag4"
              />
              <Legend position="inside" horizontalAlignment="left">
                <Border visible={true} />
              </Legend>
              <Export enabled={true} />
            </DevExtreameChartComponent>
          </Box>
        </Box>
      </Box>
    </>
  );
}
