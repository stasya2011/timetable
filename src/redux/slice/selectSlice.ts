import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import dayjs, { Dayjs } from "dayjs";

interface ISelectedDate {
  selectedDate: Dayjs;
  input: string;
}
const currentDate: ISelectedDate = { selectedDate: dayjs(), input: "" };

export const selectedDateSlice = createSlice({
  name: "selectedSlice",
  initialState: currentDate,
  reducers: {
    setSelectedDate: (
      state: ISelectedDate,
      action: PayloadAction<{ date: Dayjs; input: string }>
    ) => {
      state.selectedDate = action.payload.date;
      state.input = action.payload.input;
    },
  },
});

const { actions, reducer } = selectedDateSlice;
export const { setSelectedDate } = actions;
export default reducer;
