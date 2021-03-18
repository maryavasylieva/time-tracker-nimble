import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as PlayIcon } from "../assets/play_circle_filled-24px.svg";

const TrackerForm = ({ addTimer }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTimer(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="tracker"
        value={value}
        id="tracker"
        placeholder="Enter tracker name"
        onChange={(e) => setValue(e.target.value)}
        required
      />
      <Button>
        <Icon />
      </Button>
    </Form>
  );
};

const Form = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  padding-left: 10px;
  border: 1px solid rgb(166, 171, 185);
  border-radius: 40px;
  width: 450px;
  height: 30px;
  padding: 2px;
  position: relative;
`;

const Button = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  border-radius: 50px;
  cursor: pointer;
  position: relative;
`;

const Icon = styled(PlayIcon)`
  display: inline-block;
  width: 35px;
  height: 35px;
  fill: green;
  position: absolute;
  top: -3px;
  right: -3px;
`;

const Input = styled.input`
  flex-grow: 2;
  border: none;
  width: 350px;
  height: 27px;
  border-radius: 40px;
  padding-left: 12px;
  &::placeholder {
    color: rgb(166, 171, 185);
    font-family: "Raleway", sans-serif;
  }
  &:focus {
    outline: none;
  }
`;

export default TrackerForm;
