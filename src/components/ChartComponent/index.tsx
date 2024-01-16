import { useEffect, useRef, useState } from "react";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { useMediaQuery } from "@uidotdev/usehooks";
import TaskListVisualization from "./TaskListVisualization";
import Chart from "chart.js/auto";
import styles from "./chartComponent.module.scss";

const ChartComponent = () => {
  const isMobile = useMediaQuery(
    "only screen and(min-width: 300px) and (max-width : 768px)"
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
    setCanvasWidth(() => (isMobile ? 300 : 500));
  }, [isMobile]);

  return (
    <div className={styles.wrapper}>
      <canvas width={screenWidth} ref={chartRef} />
      <TaskListVisualization chartReducer={chartReducer} />
    </div>
  );
};

export default ChartComponent;
