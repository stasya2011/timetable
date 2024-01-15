import { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export enum STATUS {
  TODO = "Todo",
  PROCESSING = "Processing",
  DONE = "Done",
}

interface IChartElement {
  type: string;
  content: string;
  id: string;
}

interface IDataset {
  todo: IChartElement[];
  done: IChartElement[];
  proccess: IChartElement[];
}

interface IChart {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
  }[];
}

const init_data: IChart = {
  labels: [STATUS.TODO, STATUS.PROCESSING, STATUS.DONE],
  datasets: [
    {
      label: "Month",
      data: [],
      backgroundColor: ["green", "red", "grey"],
    },
  ],
};

const ChartComponent = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const { events } = useSelector((state: RootState) => state);
  const [data, setData] = useState<IChart>(init_data);
  const [dataset, setDataset] = useState<IDataset>({
    todo: [],
    done: [],
    proccess: [],
  });

  useEffect(() => {
    events.forEach((event) => {
      event.listData.forEach((element) => {
        switch (element.type) {
          case "success":
            setDataset((preState) => {
              const copyTodoEl = JSON.parse(JSON.stringify(preState));
              copyTodoEl.todo.push(element);
              return copyTodoEl;
            });
            break;
          case "processing":
            setDataset((preState) => {
              const copyTodoEl = JSON.parse(JSON.stringify(preState));
              copyTodoEl.proccess.push(element);
              return copyTodoEl;
            });
            break;
          case "default":
            setDataset((preState) => {
              const copyTodoEl = JSON.parse(JSON.stringify(preState));
              copyTodoEl.done.push(element);
              return copyTodoEl;
            });
            break;
          default:
            return;
        }
      });
    });

    setData((prevState) => {
      const updatedState = JSON.parse(JSON.stringify(prevState));
      const updatedData = [
        dataset.todo.length,
        dataset.proccess.length,
        dataset.done.length,
      ];
      updatedState.datasets[0].data = updatedData;

      return updatedState;
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataset]);

  return (
    <div style={{ width: 500 }}>
      <canvas ref={chartRef} />
    </div>
  );
};

export default ChartComponent;
