import styled from "styled-components";

export const Button = styled.button`
  font-family: "Alata", sans-serif;
  background-color: ${(props) => {
    if (props.color === "primary") {
      return props.theme.textBlue;
    } else if (props.color === "gradient") {
      return props.theme.gradient;
    } else {
      return props.theme.yellow;
    }
  }};
  color: ${(props) =>
    props.color === "primary" ? props.theme.white : props.theme.white};
  border-radius: 25px;
  padding: 1em 2em;
  border: none;
  text-transform: ${(props) => (props.color === "primary" ? "uppercase" : "")};
  font-weight: bolder;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.color === "primary" ? props.theme.lightBlue : props.theme.yellow};
    color: ${(props) =>
      props.color === "primary" ? props.theme.white : props.theme.white};
    font-weight: bolder;
  }
  &.small {
    font-size: x-small;
  }
`;
