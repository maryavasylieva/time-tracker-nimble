import styled from "styled-components";
import TrackerForm from "./Components/TrackerForm";

function App() {
  return (
    <div>
      <Headline>tracker</Headline>
      <TrackerForm />
    </div>
  );
}

const Headline = styled.h1`
  font-size: 40px;
  text-align: center;
  font-family: "Raleway", sans-serif;
`;

export default App;
