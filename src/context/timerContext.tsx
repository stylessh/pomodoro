import { createContext, useState, useEffect, FC } from "react";

import useLocalStorage from "../hooks/useLocalStorage";

const initial = {
  time:  0,
  setTimer: () => null,
  restartTimer: () => null,
};

const minutes = 1000 * 60 * 20;

export const TimerContext = createContext(initial as ContextType);

export const TimerProvider: FC = ({ children }) => {

  const [time, setTime] = useLocalStorage('time', minutes)

  const [state, setState] = useState<number>(time)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    if (Boolean(time)) {
      setState(time);
    } else {
      setTime(minutes)
    }

    setLoading(false);
  }, [time, setTime]);

  const setTimer = (total: number) => {
    setState(total);
    setTime(total);
  };

  const restartTimer = () => {
    setTime(minutes)
  }


  const value = {
    time: state,
    setTimer,
    restartTimer
  };


  return (
    <TimerContext.Provider value={value}>
      {!loading && children}
    </TimerContext.Provider>
  );
};
