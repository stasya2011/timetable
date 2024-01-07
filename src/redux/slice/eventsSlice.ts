import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IState } from "../types";
import dayjs, { Dayjs } from "dayjs";
import { v4 as uuidv4 } from "uuid";

const initialState: IState[] = [];

export const eventsSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    deleteEvent: (
      state: IState[],
      action: PayloadAction<{ eventId: string }>
    ) => {
      const index = state.findIndex(
        (event) => event.eventId === action.payload.eventId
      );

      if (index > -1 && state[index].listData.length === 0) {
        state.forEach((event, index) => {
          if (event.eventId === action.payload.eventId) {
            state.splice(index, 1);
            return;
          }
        });
      }
      localStorage.setItem("events", JSON.stringify(state));
    },

    deleteItem: (
      state: IState[],
      action: PayloadAction<{ eventId: string; itemId: string }>
    ) => {
      const index = state.findIndex(
        (event) => event.eventId === action.payload.eventId
      );

      if (index > -1) {
        state[index].listData = state[index].listData.filter(
          (item) => item.id !== action.payload.itemId
        );
      }
    },

    initializeInitialValues: (state: IState[]) => {
      const localStorageData = localStorage.getItem("events");
      const updatedStateByLocalStore = localStorageData
        ? JSON.parse(localStorageData)
        : null;

      if (updatedStateByLocalStore && updatedStateByLocalStore.length) {
        updatedStateByLocalStore.forEach((element: IState) => {
          element.date = dayjs(element.date);
        });
        return updatedStateByLocalStore;
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
      localStorage.setItem("events", JSON.stringify(state));
    },

    saveDataInLocalStore: (
      state: IState[],
      action: PayloadAction<{ events: IState[] }>
    ) => {
      localStorage.setItem("events", JSON.stringify(action.payload.events));
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
        localStorage.setItem("events", JSON.stringify(state));
      }
    },
  },
});

const { actions, reducer } = eventsSlice;
export const {
  initializeInitialValues,
  addNewDateAndEvent,
  updateEventForExistingDate,
  saveDataInLocalStore,
  deleteItem,
  deleteEvent,
} = actions;
export default reducer;
