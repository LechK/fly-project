import styled from "styled-components";
import email from "../../assets/email.svg";

export const Input = styled.input`
  width: 80%;
  border: 1px solid ${({ theme }) => theme.textBlue};
  font-family: "Alata", sans-serif;
  color: ${({ theme }) => theme.textBlue};
  background-image: url(${email});
  background-size: 1.2em;
  fill: red;
  background-position: center;
  background-position-x: 10%;
  background-repeat: no-repeat;
  text-align: center;
  padding: 1em;
  border-radius: 5px;
  @media (min-width: 580px) {
    width: 500px;
    display: inline-block;
    margin: 0 35em;
  }
`;
