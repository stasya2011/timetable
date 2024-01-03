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
    setSelectedDate: (state: ISelectedDate, action: PayloadAction<Dayjs>) => {
      state.selectedDate = action.payload;
    },

    setInput: (state: ISelectedDate, action: PayloadAction<string>) => {
      state.input = action.payload;
    },
  },
});

const { actions, reducer } = selectedDateSlice;
export const { setSelectedDate, setInput } = actions;
export default reducer;
