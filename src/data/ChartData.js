export const ColumnChartData = {
  series: [
    {
      name: "TEAM A",
      type: "column",
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
    },
    {
      name: "TEAM B",
      type: "area",
      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
    },
    {
      name: "TEAM C",
      type: "line",
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "line",
      stacked: false,
    },
    stroke: {
      width: [0, 2, 5],
      curve: "smooth",
    },
    plotOptions: {
      bar: {
        columnWidth: "10%",
      },
    },
    grid: {
      show: false,
    },
    theme: {
      monochrome: {
        enabled: true,
        color: "#255aee",
        shadeTo: "light",
        shadeIntensity: 0.65,
      },
    },
    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100],
      },
    },
    labels: [
      "01/01/2003",
      "02/01/2003",
      "03/01/2003",
      "04/01/2003",
      "05/01/2003",
      "06/01/2003",
      "07/01/2003",
      "08/01/2003",
      "09/01/2003",
      "10/01/2003",
      "11/01/2003",
    ],
    markers: {
      size: 0,
    },
    xaxis: {
      type: "datetime",
      labels: {
        style: {
          fontSize: "12px",
          fontFamily: "Poppins",
          colors: "#3da58a",
          backgroundColor: "#ff0000",
          cssClass: "chart-label-x",
        },
      },
    },
    yaxis: {
      title: {
        text: "Points",
      },
      labels: {
        style: {
          fontSize: "12px",
          fontFamily: "Poppins",
          colors: "#3da58a",
          backgroundColor: "#ff0000",
          cssClass: "chart-label-x",
        },
      },
      min: 0,
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points";
          }
          return y;
        },
      },
    },
    responsive: [
      {
        breakpoint: 1000,
        options: {
          plotOptions: {
            bar: {
              horizontal: false,
            },
          },
        },
      },
    ],
    legend: {
      position: "bottom",
      labels: {
        useSeriesColors: true,
      },
    },
  },
};

export const radialBarData = {
  series: [44, 55, 67],
  options: {
    chart: {
      height: 350,
      width: "100%",
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "55%",
        },
        dataLabels: {
          name: {
            fontSize: "22px",
            color: "#3da58a",
            fontFamily: "Poppins",
          },
          value: {
            fontSize: "16px",
            color: "#3da58a",
            fontFamily: "Poppins",
          },
          total: {
            show: true,
            label: "Total",
            color: "#3da58a",
            fontFamily: "Poppins",
            formatter: function (w) {
              return 249;
            },
          },
        },
      },
    },
    labels: ["Facebook", "Twitter", "Instagram"],
  },
};
export const DistributedColumnsData = {
  options: {
    chart: {
      height: 350,
      type: "bar",
      events: {
        click: function (chart, w, e) {
          // console.log(chart, w, e)
        },
      },
    },
    colors: [
      "#26a0fc",
      "#26e7a6",
      "#febc3b",
      "#ff6178",
      "#8b75d7",
      "#6d848e",
      "#46b3a9",
      "#d830eb",
    ],
    plotOptions: {
      bar: {
        columnWidth: "45%",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
    xaxis: {
      categories: [
        ["John", "Doe"],
        ["Joe", "Smith"],
        ["Jake", "Williams"],
        "Amber",
        ["Peter", "Brown"],
        ["Mary", "Evans"],
        ["David", "Wilson"],
        ["Lily", "Roberts"],
      ],
      labels: {
        style: {
          colors: [
            "#26a0fc",
            "#26e7a6",
            "#febc3b",
            "#ff6178",
            "#8b75d7",
            "#6d848e",
            "#46b3a9",
            "#d830eb",
          ],
          fontSize: "12px",
          fontFamily: "Poppins",
          backgroundColor: "#ff0000",
          cssClass: "chart-label-x",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: "12px",
          colors: "#3da58a",
          fontFamily: "Poppins",
          backgroundColor: "#ff0000",
          cssClass: "chart-label-x",
        },
      },
    },
  },
  series: [
    {
      data: [21, 22, 10, 28, 16, 21, 13, 30],
    },
  ],
};

export const LineWithDataLabels = {
  options: {
    chart: {
      height: 350,
      type: "line",
      dropShadow: {
        enabled: true,
        color: "#000",
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#46ebb3", "#ff798c"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    grid: {
      show: true,
    },
    markers: {
      size: 1,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      labels: {
        style: {
          fontSize: "12px",
          colors: "#3da58a",
          fontFamily: "Poppins",
          backgroundColor: "#ff0000",
          cssClass: "chart-label-x",
        },
      },
    },
    yaxis: {
      title: {
        text: "Temperature",
      },
      labels: {
        style: {
          fontSize: "12px",
          colors: "#3da58a",
          fontFamily: "Poppins",
          backgroundColor: "#ff0000",
          cssClass: "chart-label-x",
        },
      },
      min: 5,
      max: 40,
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: true,
      offsetY: -25,
      offsetX: -5,
    },
  },
  series: [
    {
      name: "High - 2013",
      data: [28, 29, 33, 36, 32, 32, 33],
    },
    {
      name: "Low - 2013",
      data: [12, 11, 14, 18, 17, 13, 13],
    },
  ],
};

export const SplineArea = {
  options: {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      labels: {
        style: {
          fontSize: "12px",
          colors: "#3da58a",
          fontFamily: "Poppins",
          backgroundColor: "#ff0000",
          cssClass: "chart-label-x",
        },
      },
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    yaxis: {
      labels: {
        style: {
          fontSize: "12px",
          colors: "#3da58a",
          fontFamily: "Poppins",
          backgroundColor: "#ff0000",
          cssClass: "chart-label-x",
        },
      },
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  },
  series: [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "series2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
};

export const StackedColumns = {
  options: {
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: true,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    grid: {
      show: false,
    },
    plotOptions: {
      bar: {
        columnWidth: "40%",
        horizontal: false,
        borderRadius: 5,
        dataLabels: {
          total: {
            enabled: true,
            style: {
              fontSize: "13px",
              color: "#3da58a",
              fontFamily: "Poppins",
              fontWeight: 900,
            },
          },
        },
      },
    },
    xaxis: {
      type: "datetime",
      labels: {
        style: {
          fontSize: "12px",
          colors: "#3da58a",
          fontFamily: "Poppins",
          backgroundColor: "#ff0000",
          cssClass: "chart-label-x",
        },
      },
      categories: [
        "01/01/2011 GMT",
        "01/02/2011 GMT",
        "01/03/2011 GMT",
        "01/04/2011 GMT",
        "01/05/2011 GMT",
        "01/06/2011 GMT",
      ],
    },
    yaxis: {
      labels: {
        style: {
          fontSize: "12px",
          colors: "#3da58a",
          fontFamily: "Poppins",
          backgroundColor: "#ff0000",
          cssClass: "chart-label-x",
        },
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: "bottom",
      labels: {
        useSeriesColors: true,
      },
    },
  },
  series: [
    {
      name: "PRODUCT A",
      data: [44, 55, 41, 67, 22, 43],
    },
    {
      name: "PRODUCT B",
      data: [13, 23, 20, 8, 13, 27],
    },
    {
      name: "PRODUCT C",
      data: [11, 17, 15, 15, 21, 14],
    },
    {
      name: "PRODUCT D",
      data: [21, 7, 25, 13, 22, 8],
    },
  ],
};
export const BarChartData = {
  options: {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: true,
    },
    xaxis: {
      categories: [
        "South Korea",
        "Canada",
        "United Kingdom",
        "Netherlands",
        "Italy",
        "France",
        "Japan",
        "United States",
        "China",
        "Germany",
      ],
      labels: {
        style: {
          fontSize: "12px",
          colors: "#3da58a",
          fontFamily: "Poppins",
          backgroundColor: "#ff0000",
          cssClass: "chart-label-x",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: "12px",
          colors: "#3da58a",
          fontFamily: "Poppins",
          backgroundColor: "#ff0000",
          cssClass: "chart-label-x",
        },
      },
    },
  },
  series: [
    {
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
    },
  ],
};

export const PieChartData = {
  options: {
    chart: {
      width: "100%",
      height: "300",
      type: "pie",
    },
    legend: {
      position: "right",
      labels: {
        useSeriesColors: true,
      },
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
  series: [44, 55, 13, 43, 22],
};

export const DonutChartData = {
  options: {
    chart: {
      type: "donut",
      width: "100%",
      height: "300",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
  series: [44, 55, 41, 17, 15],
};
export const polarAreaData = {
  options: {
    chart: {
      type: "polarArea",
      width: "100%",
      height: "300",
    },
    stroke: {
      colors: ["#fff"],
    },
    fill: {
      opacity: 0.8,
    },
    legend: {
      position: "right",
      labels: {
        useSeriesColors: true,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  },
  series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
};
export const CustomAngleCircle = {
  options: {
    chart: {
      height: 300,
      width: "100%",
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "70%",
        },
      },
    },
    labels: ["Cricket"],
  },
  series: [70],
};
