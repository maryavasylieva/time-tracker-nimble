import { useState, useEffect } from "react";
import styled from "styled-components";

import TimerList from "./Components/TimerList";
import TrackerForm from "./Components/TrackerForm";

function App() {
  const [timer, setTimer] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("timer") || []);
    setTimer(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("timer", JSON.stringify(timer));
  }, [timer]);

  const addTimer = (text) => {
    const newTodos = [...timer, { id: new Date(), text: text }];
    setTimer(newTodos);
  };

  const removeTimer = (id) => {
    const newTimerState = timer.filter((elem) => elem.id !== id);
    setTimer(newTimerState);
  };

  return (
    <div>
      <Headline>tracker</Headline>
      <TrackerForm addTimer={addTimer} />
      <TimerList timer={timer} removeTimer={removeTimer} />
    </div>
  );
}

const Headline = styled.h1`
  font-size: 40px;
  text-align: center;
  font-family: "Raleway", sans-serif;
`;

export default App;
