import { Dayjs } from "dayjs";

export interface IListData {
  type: string;
  content: string;
  id: string;
}

export interface IState {
  date: Dayjs;
  listData: IListData[];
}
