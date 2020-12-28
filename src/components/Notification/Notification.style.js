import styled from "styled-components";

export const Box = styled.div`
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: ${(props) => props.display};
`;

export const Notification = styled.div`
  font-size: 1em;
  color: white;
  background-color: ${(props) =>
    props.color === "success"
      ? props.theme.lightGreen
      : props.theme.darkOrange};
  text-align: center;
  font-size: 0.7em;
  color: white;
  padding: 1.5em;
  font-family: "Alata", sans-serif;
`;

export const NotificationButton = styled.div`
  border-radius: 50%;
  float: right;
  margin-right: -10px;
  margin-top: -10px;
  width: 18px;
  height: 18px;
  border: none;
  background-color: black;
  color: white;
  cursor: pointer;
`;

export const Line = styled.div`
  border: 1px solid white;
  margin-top: 8px;
  width: 16px;
  position: absolute;
  transform: rotate(45deg);
`;
export const Line2 = styled.div`
  border: 1px solid white;
  width: 16px;
  position: relative;
  margin-top: 8px;
  transform: rotate(135deg);
`;
