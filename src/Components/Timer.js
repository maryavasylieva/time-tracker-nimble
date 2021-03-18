import { useState, useEffect } from "react";
import styled from "styled-components";

import { ReactComponent as RemoveIcon } from "../assets/remove_circle_outline-24px.svg";
import { ReactComponent as PlayIcon } from "../assets/play_circle_outline-24px.svg";
import { ReactComponent as StopIcon } from "../assets/pause_circle_outline-24px.svg";

const Timer = () => {
  const [running, setRunning] = useState(false);
  const [startTimestamp, setStartTimestamp] = useState(null);
  const [lastTimestamp, setLastTimestamp] = useState(null);
  const [elapsedTimeStamp, setElapsedTimeStamp] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [label, setLabel] = useState("");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  useEffect(() => {
    if (start === true) {
      start();
    }
  });

  const updateLabel = (e) => {
    setLabel(e.target.value);
  };

  const render = () => {
    if (running) {
      const h = Math.floor(elapsedTimeStamp / 3600000);
      if (h > 0) {
        elapsedTimeStamp -= h * 3600000;
      }
      const m = Math.floor(elapsedTimeStamp / 60000);
      if (m > 0) {
        elapsedTimeStamp -= m * 60000;
      }
      const s = Math.floor(elapsedTimeStamp / 1000);

      setHours(h.toString().padStart(2, "0"));
      setMinutes(m.toString().padStart(2, "0"));
      setSeconds(s.toString().padStart(2, "0"));
    }
  };

  const step = () => {
    if (running) {
      const time = new Date().getTime();

      setElapsedTimeStamp(time - startTimestamp);
      setLastTimestamp(time);
      window.requestAnimationFrame(step);
    }
  };

  const start = () => {
    if (running) {
      return;
    }

    const now = new Date().getTime();

    setStartDate(new Date());
    setStartTimestamp(now);
    setLastTimestamp(now);
    setElapsedTimeStamp(0);
    setRunning(true);

    window.requestAnimationFrame(step);
  };

  //   const stop = () => {
  //     if (!running) {
  //       return;
  //     }

  //     setRunning(false);
  //     setElapsedTimeStamp(0);

  //     if ("function" === typeof this.props.onComplete) {
  //       this.props.onComplete({
  //         startDate: this.state.startDate,
  //         label: this.state.label,
  //         elapsedTimestamp: this.state.elapsedTimestamp,
  //       });
  //     }
  //   };

  const toggle = () => {
    if (running) {
      //   stop();
    } else {
      start();
    }
  };

  const remove = () => {

  }
  return (
    <Container>
      <div>
        <span className="hours">{hours}</span>:
        <span className="minutes">{minutes}</span>:
        <span className="seconds">{seconds}</span>
      </div>


        <Button onClick={toggle}>
          {running ? <StopIcon /> : <PlayIcon />}
        </Button>
        <Button>
          <Remove />
        </Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Button = styled.button`
  border: none;
  background: transparent;
  width: 15px;
  cursor: pointer;
`

const Remove = styled(RemoveIcon)`
   fill: red;
`

export default Timer;
