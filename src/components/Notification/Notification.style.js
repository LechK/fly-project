import styled from "styled-components";

export const Notification = styled.div`
  background-color: ${(props) =>
    props.color === "success"
      ? props.theme.lightGreen
      : props.theme.darkOrange};
  text-align: center;
  color: white;
  padding: 1em;
  font-family: "Alata", sans-serif;
`;
