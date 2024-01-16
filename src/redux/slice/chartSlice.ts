import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { STATUS, IChart, IDataset } from "../types";

const initialState: IChart = {
  data: { todo: [], done: [], proccess: [] },
  labels: [STATUS.TODO, STATUS.PROCESSING, STATUS.DONE],
  datasets: [
    {
      label: "Month",
      data: [10, 50, 40],
      backgroundColor: ["green", "red", "grey"],
    },
  ],
};
const chartSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {
    setValuesForGraph: (state, action: PayloadAction<IDataset>) => {
      state.data = action.payload;
      state.datasets[0].data = [
        action.payload.todo.length,
        action.payload.proccess.length,
        action.payload.done.length,
      ];
    },
  },
});

const { reducer: chartReducer, actions } = chartSlice;
export const { setValuesForGraph } = actions;
export default chartReducer;
