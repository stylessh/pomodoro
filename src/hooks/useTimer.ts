import { useContext } from "react";
import { TimerContext } from "../context/timerContext";

const useTimer = () => {
  return useContext(TimerContext);
};

export default useTimer;
