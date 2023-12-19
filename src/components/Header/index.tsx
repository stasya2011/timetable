import { Link } from "react-router-dom";
const HeaderComponent = () => {
  return (
    <div>
      <Link to={"/"}>Calendar</Link>
      <Link to={"/diagram"}>Diagram</Link>
    </div>
  );
};

export default HeaderComponent;
