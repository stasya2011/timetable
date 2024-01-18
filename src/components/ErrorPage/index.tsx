import { Link } from "react-router-dom";
import { Button, Image } from "antd";
import styles from "./errorPage.module.scss";

const ErrorPage = () => {
  return (
    <div className={styles.wrapper}>
      <Image src="/oops.jpg" width={250} />

      <Button type="primary">
        <Link to={"/"}>Back to home page</Link>
      </Button>
    </div>
  );
};

export default ErrorPage;
