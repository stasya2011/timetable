import { createSlice } from "@reduxjs/toolkit";
import { IState } from "../types";

const initialState: IState[] = [];

export const eventsSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setEvents: (state: IState[], value: { payload: string }) => {
      console.log(value);
      state.push({
        date: "31-12-2023",
        listData: [
          { type: "warning", content: "This is warning event." },
          { type: "success", content: "This is usual event." },
          { type: "error", content: "This is error event." },
        ],
      });
    },
  },
});

const { actions, reducer } = eventsSlice;
export const { setEvents } = actions;
export default reducer;
