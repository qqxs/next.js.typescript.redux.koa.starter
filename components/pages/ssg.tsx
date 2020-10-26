import { useDispatch } from "react-redux";
import useInterval from "../../hooks/useInterval";
import Clock from "../clock";
import Counter from "../counter";
import Nav from "../nav";

const Page: React.FC = () => {
  const dispatch = useDispatch();

  // Tick the time every second
  useInterval(() => {
    dispatch({
      type: "TICK",
      light: true,
      lastUpdate: Date.now()
    });
  }, 1000);

  return (
    <>
      <Nav />
      <Clock />
      <Counter />
    </>
  );
};

export default Page;
