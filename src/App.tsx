import { BrowserRouter as Router } from "react-router-dom";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Layout } from "antd";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import HeaderComponent from "./components/Header";
import MainPage from "./components/MainPage";
import styles from "./app.module.scss";

const { Header } = Layout;

const App = () => {
  const isMobile = useMediaQuery("only screen and (max-width : 768px)");
  // const isDesktop = useMediaQuery(
  //   "only screen and (min-width : 769px) and (max-width : 1200px)"
  // );

  return (
    <Provider store={store}>
      <Router>
        <Layout
          style={{
            minWidth: isMobile ? 250 : 800,
            maxWidth: isMobile ? 350 : 800,
          }}
          className={styles.layout}
        >
          <Header
            style={{
              display: "flex",
              alignItems: "center",
              paddingLeft: 10,
            }}
          >
            <HeaderComponent />
          </Header>

          <MainPage />
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
