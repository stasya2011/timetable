import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IState } from "../types";
import dayjs, { Dayjs } from "dayjs";
import { v4 as uuidv4 } from "uuid";

const initialState: IState[] = [];

export const eventsSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    initializeInitialValues: (state: IState[]) => {
      const localStorageData = localStorage.getItem("events");

      if (localStorageData) {
        const a = JSON.parse(localStorageData);
        a.forEach((element: IState) => {
          return (element.date = dayjs(element.date));
        });
        return a;
      }
      return state;
    },

    addNewDateAndEvent: (
      state: IState[],
      action: PayloadAction<{ date: Dayjs; input: string }>
    ) => {
      const id = uuidv4();
      const listDateItem: IState = {
        eventId: action.payload.date.format("DD-MM-YYYY"),
        date: action.payload.date,
        listData: [
          {
            type: "success",
            content: action.payload.input,
            id,
          },
        ],
      };
      state.push(listDateItem);
    },

    updateEventForExistingDate: (
      state: IState[],
      action: PayloadAction<{ eventId: string; input: string }>
    ) => {
      const id = uuidv4();
      const index = state.findIndex(
        (event) => event.eventId === action.payload.eventId
      );
      if (index > -1) {
        const listDateItem = {
          type: "success",
          content: action.payload.input,
          id,
        };

        state[index].listData.push(listDateItem);
      }
    },
  },
});

const { actions, reducer } = eventsSlice;
export const {
  initializeInitialValues,
  addNewDateAndEvent,
  updateEventForExistingDate,
} = actions;
export default reducer;
