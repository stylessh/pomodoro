import { useState, useRef } from "react";
import Countdown, { CountdownRendererFn, zeroPad } from "react-countdown";
import { HiOutlinePause, HiOutlinePlay } from "react-icons/hi";
import { RiRestartLine } from "react-icons/ri";

import useTimer from "../../hooks/useTimer";

import {
  Container,
  TimerContainer,
  TimerBar,
  TimerInfo,
  TimerReset,
} from "./styles";

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
  const { time, setTimer, restartTimer } = useTimer();

  const [paused, setPaused] = useState<boolean>(false);
  const [percent, setPercent] = useState<number>(0);

  const countdown = useRef<Countdown | null>(null);

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
    setPercent(Math.floor(0.5 * e.minutes * 10));
    setTimer(e.total);
  };

  const handleRestart = () => {
    restartTimer();

    countdown.current?.start();
    setPaused(false);
  };

  return (
    <Container>
      {paused && (
        <TimerReset onClick={handleRestart}>
          <RiRestartLine className="icon" />
        </TimerReset>
      )}

      <TimerContainer>
        <TimerBar />

        <TimerInfo>
          <Countdown
            ref={countdown}
            date={Date.now() + time}
            onTick={handleTick}
            renderer={renderer}
          />

          <button className="stop-play" onClick={handlePause}>
            {paused ? (
              <HiOutlinePlay className="icon" />
            ) : (
              <HiOutlinePause className="icon" />
            )}
          </button>
        </TimerInfo>
      </TimerContainer>
    </Container>
  );
};

export default Timer;
