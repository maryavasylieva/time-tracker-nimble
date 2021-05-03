import { useState, useRef } from "react";

const useTimer = (initialState = 0) => {
  const [running, setRunning] = useState(false);
  const [stop, setStop] = useState(false);
  const [time, setTime] = useState(0);
  const counterRef = useRef();

  const handleRun = () => {
    if (!running) {
      counterRef.current = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
      setRunning(true);
    } else {
      clearInterval(counterRef.current);
      setRunning(false);
      setStop(time);
    }
  };

  const handleResume = () => {
    clearInterval(counterRef.current);
    setStop(time);
  };
  return {
    running,
    stop,
    time,
    handleRun,
    handleResume,
  };
};

export default useTimer;
