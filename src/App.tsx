import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChartComponent from "./components/ChartComponent";
import HeaderComponent from "./components/Header";
import ErrorPage from "./components/ErrorPage";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Layout } from "antd";
import CalendarPage from "./components/CalendarPage.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import styles from "./app.module.scss";

const { Header } = Layout;

const App = () => {
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
  const isMobile = useMediaQuery("only screen and (max-width : 768px)");

  // const isDesktop = useMediaQuery(
  //   "only screen and (min-width : 769px) and (max-width : 1200px)"
  // );

  return (
    <Provider store={store}>
      <Router>
        <Layout
          style={{
            width: isMobile ? 350 : 800,
          }}
          className={styles.layout}
        >
          <Header style={{ display: "flex", alignItems: "center" }}>
            <HeaderComponent />
          </Header>

          <main className={styles.main}>
            <Routes>
              <Route
                element={<ChartComponent data={chartData} />}
                path="/diagram"
              />
              <Route element={<CalendarPage />} path="/" />
              <Route element={<ErrorPage />} path="*" />
            </Routes>
          </main>
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
