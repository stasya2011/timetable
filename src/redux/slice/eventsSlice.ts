import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IState } from "../types";
import { Dayjs } from "dayjs";
import { v4 as uuidv4 } from "uuid";

const initialState: IState[] = [];

export const eventsSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setEvents: (state: IState[], action: PayloadAction<Dayjs>) => {
      state.push({
        date: action.payload,
        listData: [
          { type: "warning", content: "This is warning event.", id: uuidv4() },
          { type: "success", content: "This is usual event.", id: uuidv4() },
          { type: "error", content: "This is error event.", id: uuidv4() },
        ],
      });
    },
  },
});

const { actions, reducer } = eventsSlice;
export const { setEvents } = actions;
export default reducer;
