import { createContext, useState, useEffect, FC } from "react";

const initial = {
  time: 0,
  setTimer: () => null,
};

export const TimerContext = createContext(initial as ContextType);

export const TimerProvider: FC = ({ children }) => {
  const [time, setTime] = useState<any>(
    () => localStorage.getItem("time") || Date.now() + 1000 * 60 * 20
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    if (Boolean(localStorage.getItem("time"))) {
      setTime(localStorage.getItem("time"));
    }

    setLoading(false);
  }, []);

  const setTimer = (total: number) => {
    setTime(total);
    localStorage.setItem("time", total.toString());
  };

  const value = {
    time: parseInt(time),
    setTimer,
  };

  console.log(value)

  return (
    <TimerContext.Provider value={value}>
      {!loading && children}
    </TimerContext.Provider>
  );
};
