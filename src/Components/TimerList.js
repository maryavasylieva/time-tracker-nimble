// import { useState, useEffect } from "react";
import Timer from "./Timer";
import styled from "styled-components";

const TimerList = ({ timer, removeTimer }) => {
  return (
    <Container>
      <List>
        {timer.map((elem) => (
          <ListItem key={elem.id}>
            <Label>{elem.text}</Label>
            <Timer removeTimer={removeTimer} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

const Container = styled.div`
  width: 450px;
  margin: 0 auto;
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-top: 20px;
`;

const Label = styled.span`
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  font-size: 14px;
  font-weight: 700;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid lightgrey;
  padding: 10px 0 10px 10px;
  &:last-child {
    border-bottom: 1px solid lightgrey;
  }
  &:hover {
    background: #f4f5e6;
    color: green;
    transition: all 0.6s ease-in-out;
  }
  /* TODO: активный таймер должен подсвечиваться */
`;

export default TimerList;
