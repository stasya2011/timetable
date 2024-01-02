import { configureStore } from "@reduxjs/toolkit";
import events from "./slice/eventsSlice";

export const store = configureStore({
  reducer: { events },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
