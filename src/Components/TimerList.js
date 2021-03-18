import Timer from "./Timer";
import styled from "styled-components";

const TimerList = ({ timer }) => {
  return (
    <Container>
      <List>
        {timer.map((elem) => (
          <li key={elem.id}>
            <p>{elem.text}</p>
            <Timer />
          </li>
        ))}
      </List>
    </Container>
  );
};

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const List = styled.div`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export default TimerList;
