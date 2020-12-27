import styled from "styled-components";

export const Box = styled.div`
  padding: 0;
`;

export const Notification = styled.div`
  font-size: 1em;
  color: white;
  background-color: ${(props) =>
    props.color === "success"
      ? props.theme.lightGreen
      : props.theme.darkOrange};
  text-align: center;
  color: white;
  padding: 1em;
  font-family: "Alata", sans-serif;
`;

export const NotificationButton = styled.div`
  border-radius: 50%;
  position: sticky;
  float: right;
  margin-top: -0.5em;
  width: 23px;
  text-align: center;
  height: 18px;
  border: none;
  background-color: black;
  color: white;
  cursor: pointer;
`;
