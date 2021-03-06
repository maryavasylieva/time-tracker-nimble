import { useState, useRef } from "react";
import styled from "styled-components";

import { ReactComponent as RemoveIcon } from "../assets/remove_circle_outline-24px.svg";
import { ReactComponent as PlayIcon } from "../assets/play_circle_outline-24px.svg";
import { ReactComponent as StopIcon } from "../assets/pause_circle_outline-24px.svg";
import { renderTime } from "../utils/renderTime";
import useTimer from "../hook/useTimer";

// TODO: 1.Создание записи происходит путем введения имени и нажатия кнопки ▶ или Enter, cразу же запускается таймер; 2.Если кнопка ▶ была нажата без введения имени, то имя генерируется автоматически на основе текущей даты;

const Timer = ({ removeTimer }) => {
  const { running, time, handleResume, handleRun } = useTimer(0);

  return (
    <Container>
      <TimeContainer>{renderTime(time)}</TimeContainer>

      <Button onClick={handleRun}>
        {running ? <StopIcon /> : <PlayIcon />}
      </Button>
      <Button onClick={handleResume}></Button>
      <Button onClick={removeTimer}>
        <Remove />
      </Button>
    </Container>
  );
};
// class Timer extends Component {
//   constructor() {
//     super();

//     this.state = {
//       running: false,
//       startTimestamp: null,
//       lastTimestamp: null,
//       elapsedTimestamp: null,
//       startDate: null,
//     };

//     this.toggle = this.toggle.bind(this);
//     this.step = this.step.bind(this);
//   }

//   componentDidMount() {
//     if (this.props.start === true) {
//       this.start();
//     }
//   }

//   render() {
//     const running = this.state.running;
//     let hours = "00";
//     let minutes = "00";
//     let seconds = "00";

//     if (running) {
//       let elapsedTimestamp = this.state.elapsedTimestamp;
//       const h = Math.floor(elapsedTimestamp / 3600000);
//       if (h > 0) {
//         elapsedTimestamp -= h * 3600000;
//       }
//       const m = Math.floor(elapsedTimestamp / 60000);
//       if (m > 0) {
//         elapsedTimestamp -= m * 60000;
//       }
//       const s = Math.floor(elapsedTimestamp / 1000);

//       hours = h.toString().padStart(2, "0");
//       minutes = m.toString().padStart(2, "0");
//       seconds = s.toString().padStart(2, "0");
//     }

//     return (
//       <Container>
//         <TimeContainer>
//           <span className="hours">{hours}</span>:
//           <span className="minutes">{minutes}</span>:
//           <span className="seconds">{seconds}</span>
//         </TimeContainer>
//         <Button onClick={this.toggle}>
//           {running ? <StopIcon /> : <PlayIcon />}
//         </Button>
//       </Container>
//     );
//   }

//   step() {
//     if (this.state.running) {
//       const time = new Date().getTime();
//       this.setState(
//         Object.assign({}, this.state, {
//           lastTimestamp: time,
//           elapsedTimestamp: time - this.state.startTimestamp,
//         })
//       );
//       window.requestAnimationFrame(this.step);
//     }
//   }

//   toggle() {
//     if (this.state.running) {
//       this.stop();
//     } else {
//       this.start();
//     }
//   }

//   start() {
//     if (this.state.running) {
//       return;
//     }

//     const now = new Date().getTime();

//     this.setState(
//       Object.assign({}, this.state, {
//         startDate: new Date(),
//         startTimestamp: now,
//         lastTimestamp: now,
//         elapsedTimestamp: 0,
//         running: true,
//       })
//     );

//     window.requestAnimationFrame(this.step);
//   }

//   stop() {
//     if (!this.state.running) {
//       return;
//     }

//     this.setState(
//       Object.assign({}, this.state, {
//         running: false,
//         elapsedTimestamp: 0,
//       })
//     );
//   }
// }

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Button = styled.button`
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
`;

const Remove = styled(RemoveIcon)`
  fill: red;
  margin-left: 8px;
`;

const TimeContainer = styled.div`
  font-family: "Titillim Web", sans-serif;
  font-size: 14px;
  font-weight: 700;
  margin-right: 15px;
`;

export default Timer;
