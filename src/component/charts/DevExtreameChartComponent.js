import { Chart } from "devextreme-react";

export default function DevExtreameChartComponent({
  title,
  dataSource,
  id,
  palette,
  children,
}) {
  return (
    <>
      <Chart title={title} dataSource={dataSource} id={id} palette={palette}>
        {children}
      </Chart>
    </>
  );
}
