import { Route, Routes } from "react-router-dom";
import ChartComponent from "../ChartComponent";
import CalendarPage from "../CalendarPage";
import ErrorPage from "../ErrorPage";
import styles from "./mainPage.module.scss";

const MainPage = () => {
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
