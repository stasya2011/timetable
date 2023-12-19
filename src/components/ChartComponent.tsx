import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const ChartComponent = ({ data }: { data: any }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const ctx = chartRef.current ? chartRef.current.getContext("2d") : null;
    if (ctx) {
      const myChart = new Chart(ctx, {
        type: "pie",
        data: data,
      });

      return () => {
        myChart.destroy();
      };
    }
  }, [data]);

  return (
    <div style={{ width: 500 }}>
      <canvas ref={chartRef} />
    </div>
  );
};

export default ChartComponent;
