import { useEffect, useState, useRef } from "react";
import { Container, TimerContainer, TimerBar, TimerInfo } from "./styles";
import Countdown, { CountdownRendererFn, zeroPad } from "react-countdown";

import useTimer from "../../hooks/useTimer";

const renderer: CountdownRendererFn = ({ minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <h2>finish</h2>;
  } else {
    // Render a countdown
    return (
      <div className="remain">
        {zeroPad(minutes, 2)}:{zeroPad(seconds, 2)}
      </div>
    );
  }
};

const Timer = () => {
  const { time, setTimer } = useTimer();

  // const [final, setFinal] = useState(0);
  const [paused, setPaused] = useState<boolean>(false);
  const [percent, setPercent] = useState<number>(0);

  const countdown = useRef<Countdown | null>(null);

  useEffect(() => {
    // setFinal(time);

    console.log(countdown.current?.offsetTime);
  }, []);

  const handlePause = () => {
    if (countdown.current?.isPaused()) {
      countdown.current?.start();
      setPaused(false);
    } else {
      countdown.current?.pause();
      setPaused(true);
    }
  };

  const handleTick = (e: any) => {
    console.log(e);
    setPercent(Math.floor(0.5 * e.minutes * 10));
    setTimer(e.total);
  };

  return (
    <Container>
      {paused && <button>restart</button>}

      <TimerContainer>
        <TimerBar />

        <TimerInfo>
          <Countdown
            ref={countdown}
            date={time}
            onTick={handleTick}
            renderer={renderer}
          />

          <button className="stop-play" onClick={handlePause}>
            {paused ? "continue" : "pause"}
          </button>
        </TimerInfo>
      </TimerContainer>
    </Container>
  );
};

export default Timer;
