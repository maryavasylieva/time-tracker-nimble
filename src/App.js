import { useState, useEffect } from "react";
import styled from "styled-components";

import TimerList from "./Components/TimerList";
import TrackerForm from "./Components/TrackerForm";

function App() {
  const initialState = () => JSON.parse(localStorage.getItem("timer") || null);
  const [timer, setTimer] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("timer", JSON.stringify(timer));
  }, [timer]);

  const addTimer = (text) => {
    const newTodos = [...timer, { id: new Date(), text: text }];
    setTimer(newTodos);
  };

  return (
    <div>
      <Headline>tracker</Headline>
      <TrackerForm addTimer={addTimer} />
      <TimerList timer={timer} />
    </div>
  );
}

const Headline = styled.h1`
  font-size: 40px;
  text-align: center;
  font-family: "Raleway", sans-serif;
`;

export default App;
