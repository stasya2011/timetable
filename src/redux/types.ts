import { Dayjs } from "dayjs";

export interface IListData {
  type: string;
  content: string;
  id: string;
}

export interface IState {
  eventId: string;
  date: Dayjs;
  listData: IListData[];
}

export enum STATUS {
  TODO = "Todo",
  PROGRESS = "Progress",
  DONE = "Done",
}

export interface IChartElement {
  type: string;
  content: string;
  id: string;
}

export interface IDataset {
  todo: IChartElement[];
  done: IChartElement[];
  progress: IChartElement[];
}

export interface IChart {
  data: IDataset;
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
  }[];
}
