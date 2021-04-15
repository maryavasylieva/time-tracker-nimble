import React, { Component } from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

import { ReactComponent as RemoveIcon } from "../assets/remove_circle_outline-24px.svg";
import { ReactComponent as PlayIcon } from "../assets/play_circle_outline-24px.svg";
import { ReactComponent as StopIcon } from "../assets/pause_circle_outline-24px.svg";

// const Timer = ({ removeTimer }) => {
//   const [running, setRunning] = useState(false);
//   const [startTimestamp, setStartTimestamp] = useState(null);
//   const [lastTimestamp, setLastTimestamp] = useState(null);
//   const [elapsedTimeStamp, setElapsedTimeStamp] = useState(null);
//   // const [startDate, setStartDate] = useState(null);
//   const [hours, setHours] = useState("00");
//   const [minutes, setMinutes] = useState("00");
//   const [seconds, setSeconds] = useState("00");

//   useEffect(() => {
//     if (start === true) {
//       start();
//     }
//   });

//   // function render() {
//   //   if (running) {
//   //     const h = Math.floor(elapsedTimeStamp / 3600000);
//   //     console.log(h)
//   //     if (h > 0) {
//   //       elapsedTimeStamp -= h * 3600000;
//   //     }
//   //     const m = Math.floor(elapsedTimeStamp / 3600000);
//   //     if (m > 0) {
//   //       elapsedTimeStamp -= m * 60000;
//   //     }
//   //     const s = Math.floor(elapsedTimeStamp / 1000);

//   //     setHours(h.toString().padStart(2, "0"));
//   //     setMinutes(m.toString().padStart(2, "0"));
//   //     setSeconds(s.toString().padStart(2, "0"));
//   //   }
//   // }

//   function step() {
//     if (running) {
//       const time = new Date().getTime();
//       console.log("time", time);
//       setLastTimestamp(time);
//       setElapsedTimeStamp(time - startTimestamp);
//       window.requestAnimationFrame(step);
//     }
//   }

//   function start() {
//     const h = Math.floor(elapsedTimeStamp / 3600000);
//     console.log(h);
//     // if (h > 0) {
//     //   elapsedTimeStamp -= h * 3600000;
//     // }
//     // const m = Math.floor(elapsedTimeStamp / 3600000);
//     // if (m > 0) {
//     //   elapsedTimeStamp -= m * 60000;
//     // }
//     const s = Math.floor(elapsedTimeStamp / 1000);
//     console.log(s)
//     setHours(h.toString().padStart(2, "0"));
//     // setMinutes(m.toString().padStart(2, "0"));
//     setSeconds(s.toString().padStart(2, "0"));

//     // const now = new Date().getTime();

//     // setStartDate(new Date());
//     // setStartTimestamp(now);
//     // setLastTimestamp(now);
//     // setElapsedTimeStamp(0);
//     setRunning(true);

//     window.requestAnimationFrame(step);
//   }

//   function stop() {
//     if (!running) {
//       return;
//     }

//     setRunning(false);
//     setElapsedTimeStamp(0);

//     // if ("function" === typeof this.props.onComplete) {
//     //   this.props.onComplete({
//     //     startDate: this.state.startDate,
//     //     label: this.state.label,
//     //     elapsedTimestamp: this.state.elapsedTimestamp,
//     //   });
//     // }
//   }

//   const toggle = () => {
//     if (running) {
//       stop();
//     } else {
//       start();
//     }
//   };

//   return (
//     <Container>
//       <TimeContainer>
//         <span className="hours">{hours}</span>:
//         <span className="minutes">{minutes}</span>:
//         <span className="seconds">{seconds}</span>
//       </TimeContainer>

//       <Button onClick={toggle}>{running ? <StopIcon /> : <PlayIcon />}</Button>
//       <Button onClick={removeTimer}>
//         <Remove />
//       </Button>
//     </Container>
//   );
// };
class Timer extends Component {
  constructor() {
    super();

    this.state = {
      running: false,
      startTimestamp: null,
      lastTimestamp: null,
      elapsedTimestamp: null,
      startDate: null,
    };

    this.toggle = this.toggle.bind(this);
    this.step = this.step.bind(this);
  }

  componentDidMount() {
    if (this.props.start === true) {
      this.start();
    }
  }

  render() {
    const running = this.state.running;
    let hours = "00";
    let minutes = "00";
    let seconds = "00";

    if (running) {
      let elapsedTimestamp = this.state.elapsedTimestamp;
      const h = Math.floor(elapsedTimestamp / 3600000);
      if (h > 0) {
        elapsedTimestamp -= h * 3600000;
      }
      const m = Math.floor(elapsedTimestamp / 60000);
      if (m > 0) {
        elapsedTimestamp -= m * 60000;
      }
      const s = Math.floor(elapsedTimestamp / 1000);

      hours = h.toString().padStart(2, "0");
      minutes = m.toString().padStart(2, "0");
      seconds = s.toString().padStart(2, "0");
    }

    return (
      <Container>
        <TimeContainer>
          <span className="hours">{hours}</span>:
          <span className="minutes">{minutes}</span>:
          <span className="seconds">{seconds}</span>
        </TimeContainer>
        <Button onClick={this.toggle}>
          {running ? <StopIcon /> : <PlayIcon />}
        </Button>
      </Container>
    );
  }

  step() {
    if (this.state.running) {
      const time = new Date().getTime();
      this.setState(
        Object.assign({}, this.state, {
          lastTimestamp: time,
          elapsedTimestamp: time - this.state.startTimestamp,
        })
      );
      window.requestAnimationFrame(this.step);
    }
  }

  toggle() {
    if (this.state.running) {
      this.stop();
    } else {
      this.start();
    }
  }

  start() {
    if (this.state.running) {
      return;
    }

    const now = new Date().getTime();

    this.setState(
      Object.assign({}, this.state, {
        startDate: new Date(),
        startTimestamp: now,
        lastTimestamp: now,
        elapsedTimestamp: 0,
        running: true,
      })
    );

    window.requestAnimationFrame(this.step);
  }

  stop() {
    if (!this.state.running) {
      return;
    }

    this.setState(
      Object.assign({}, this.state, {
        running: false,
        elapsedTimestamp: 0,
      })
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Button = styled.button`
  border: none;
  background: transparent;
  /* width: 15px; */
  padding: 0;
  cursor: pointer;
`;

const Remove = styled(RemoveIcon)`
  fill: red;
  margin-left: 8px;
`;

const TimeContainer = styled.div`
  font-family: "Raleway", sans-serif;
  font-size: 14px;
  font-weight: 700;
  margin-right: 15px;
`;

export default Timer;
