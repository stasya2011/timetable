import { Route, Routes } from "react-router-dom";
import ChartComponent from "../ChartComponent";
import CalendarPage from "../CalendarPage";
import ErrorPage from "../ErrorPage";
import styles from "./mainPage.module.scss";
import { useEffect } from "react";
import { sortEventsByStatus } from "../../utils";
import { setValuesForGraph } from "../../redux/slice/chartSlice";
import {
  RootState,
  selectStateFromEventsSliceSelector,
  useAppDispatch,
} from "../../redux/store";
import { useSelector } from "react-redux";
import { initializeInitialValues } from "../../redux/slice/eventsSlice";

const MainPage = () => {
  const reduxState = useSelector((state: RootState) => state);
  const selectedData = selectStateFromEventsSliceSelector(reduxState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializeInitialValues());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const dataset = sortEventsByStatus(selectedData);
    dispatch(setValuesForGraph(dataset));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedData]);

  return (
    <main className={styles.main}>
      <Routes>
        <Route element={<ChartComponent />} path="/diagram" />
        <Route element={<CalendarPage />} path="/" />
        <Route element={<ErrorPage />} path="*" />
      </Routes>
    </main>
  );
};

export default MainPage;
