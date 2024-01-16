import { configureStore, createSelector } from "@reduxjs/toolkit";
import events from "./slice/eventsSlice";
import selectedDate from "./slice/selectSlice";
import modalWindow from "./slice/modalSlice";
import chartReducer from "./slice/chartSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: { events, selectedDate, modalWindow, chartReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export type RootState = ReturnType<typeof store.getState>;
const selectStateFromEventsSlice = (state: RootState) => state.events;
export const selectStateFromEventsSliceSelector = createSelector(
  selectStateFromEventsSlice,
  (events) => events
);
