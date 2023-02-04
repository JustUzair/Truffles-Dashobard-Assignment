import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Chart from "react-apexcharts";
// const Chart = dynamic(() => , { ssr: false });

const ApexChart = () => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  const options = {
    xaxis: {
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    // yaxis: {
    //   categories: [
    //     "0",
    //     "100",
    //     "200",
    //     "300",
    //     "400",
    //     "500",
    //     "600",
    //     "700",
    //     "800",
    //     "900",
    //     "1000",
    //   ],
    // },
    stroke: {
      curve: "smooth",
      width: 4,
      colors: ["#FF8540", "#82D616"],
    },
    fill: {
      type: "gradient",
      colors: ["#FF8540", "#82D616"],
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.2,
        opacityTo: 0.5,
        stops: [0, 100],
        type: "vertical",
      },
    },
    markers: {
      size: 0,
      colors: ["#FF8540", "#82D616"],
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: true,
      showForSingleSeries: false,
      showForNullSeries: true,
      showForZeroSeries: true,
      position: "bottom",
      horizontalAlign: "center",
      floating: false,
      fontSize: "14px",
      fontFamily: "Helvetica, Arial",
      fontWeight: 500,
      formatter: undefined,
      inverseOrder: false,
      width: undefined,
      height: undefined,
      tooltipHoverFormatter: undefined,
      customLegendItems: [],
      offsetX: 0,
      offsetY: 0,
      labels: {
        colors: ["#FF8540", "#82D616"],
      },
      markers: {
        width: 12,
        height: 12,
        strokeWidth: 0,
        strokeColor: "#fff",
        fillColors: ["#FF8540", "#82D616"],
        radius: 12,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0,
      },
      itemMargin: {
        horizontal: 5,
        vertical: 0,
      },
      onItemClick: {
        toggleDataSeries: true,
      },
      onItemHover: {
        highlightDataSeries: true,
      },
    },
    tooltip: {
      marker: false,
    },
  };
  const series = [
    {
      name: "Assets",
      data: [30, 40, 25, 50, 49, 21, 70, 51, 15],
      colors: "#FF8540",
    },
    {
      name: "Liability",
      data: [23, 12, 54, 61, 32, 56, 81, 19, 12],
      colors: "#82D616",
    },
  ];
  return (
    <div>
      <Chart options={options} series={series} type="area" />
    </div>
  );
};

export default ApexChart;
