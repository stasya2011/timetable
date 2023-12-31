import { configureStore } from "@reduxjs/toolkit";
import events from "./slice/eventsSlice";
import selectedDate from "./slice/selectSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: { events, selectedDate },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export type RootState = ReturnType<typeof store.getState>;
