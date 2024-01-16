import { Dayjs } from "dayjs";
import { IDataset, IState } from "../redux/types";

export const formatDate = (date: Dayjs) => date.format("DD-MM-YYYY");

export const sortEventsByStatus = (events: IState[]) => {
  const dataForG: IDataset = { todo: [], proccess: [], done: [] };
  events.forEach((event: IState) => {
    event.listData.forEach((element) => {
      switch (element.type) {
        case "success":
          dataForG.todo.push(element);
          break;
        case "processing":
          dataForG.proccess.push(element);
          break;
        case "default":
          dataForG.done.push(element);
          break;
        default:
          return;
      }
    });
  });

  return dataForG;
};
