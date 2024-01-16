import { useEffect, useRef, useState } from "react";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { useMediaQuery } from "@uidotdev/usehooks";
import Chart from "chart.js/auto";

const ChartComponent = () => {
  const isMobile = useMediaQuery("only screen and (max-width : 768px)");
  const isDesktop = useMediaQuery(
    "only screen and (min-width : 769px) and (max-width : 1200px)"
  );
  const [screenWidth, setCanvasWidth] = useState(isMobile ? 300 : 500);
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const { chartReducer } = useSelector((state: RootState) => state);

  useEffect(() => {
    const ctx = chartRef.current ? chartRef.current.getContext("2d") : null;

    if (ctx) {
      const myChart = new Chart(ctx, {
        type: "pie",
        data: { datasets: chartReducer.datasets, labels: chartReducer.labels },
      });

      return () => {
        myChart.destroy();
      };
    }
  }, [chartReducer]);

  useEffect(() => {
    setCanvasWidth(() => (isDesktop ? 500 : 300));
  }, [isDesktop]);

  return (
    <div style={{ width: screenWidth }}>
      <canvas style={{ width: screenWidth }} ref={chartRef} />
    </div>
  );
};

export default ChartComponent;
