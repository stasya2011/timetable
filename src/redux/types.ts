export interface IListData {
  type: string;
  content: string;
}

export interface IState {
  date: string;
  listData: IListData[];
}
