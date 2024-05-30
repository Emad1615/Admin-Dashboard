export const StatData = [
  {
    options: {
      chart: {
        type: "radialBar",
        width: 40,
        height: 40,
        sparkline: {
          enabled: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "70%",
          },
          track: {
            margin: 1,
          },
          dataLabels: {
            show: false,
          },
        },
      },
    },
    series: [53, 67],
    Title: "Users",
    NoData: "2.2k",
    perData: "0.02% ",
    capData: "From previous",
  },
  {
    options: {
      chart: {
        type: "radialBar",
        width: 50,
        height: 50,
        sparkline: {
          enabled: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "50%",
          },
          track: {
            margin: 0,
          },
          dataLabels: {
            show: false,
          },
        },
      },
    },
    series: [45],
    Title: "Views per minute",
    NoData: "50",
    perData: "1.7% ",
    capData: "From previous",
  },
  {
    options: {
      chart: {
        type: "donut",
        width: 40,
        height: 40,
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        width: 1,
      },
      tooltip: {
        fixed: {
          enabled: false,
        },
      },
    },
    series: [43, 32, 12, 9],
    Title: "Bounce Rate",
    NoData: "24.03 %",
    perData: "0.01%",
    capData: "From previous",
  },
  {
    options: {
      chart: {
        type: "pie",
        width: 40,
        height: 40,
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        width: 1,
      },
      tooltip: {
        fixed: {
          enabled: false,
        },
      },
    },
    series: [43, 32, 12, 9],
    Title: "New Visitors",
    NoData: "435",
    perData: "0.01%",
    capData: "From previous",
  },
];
