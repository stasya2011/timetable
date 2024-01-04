import { Route, Routes } from "react-router-dom";
import ChartComponent from "../ChartComponent";
import CalendarPage from "../CalendarPage";
import ErrorPage from "../ErrorPage";
import styles from "./mainPage.module.scss";

const chartData = {
  labels: ["Label 1", "Label 2", "Label 3", "Label 4"],
  datasets: [
    {
      label: "Dataset 1",
      data: [10, 20, 30, 25],
      backgroundColor: ["red", "green", "blue", "pink"],
    },
  ],
};
const MainPage = () => {
  return (
    <main className={styles.main}>
      <Routes>
        <Route element={<ChartComponent data={chartData} />} path="/diagram" />
        <Route element={<CalendarPage />} path="/" />
        <Route element={<ErrorPage />} path="*" />
      </Routes>
    </main>
  );
};

export default MainPage;
