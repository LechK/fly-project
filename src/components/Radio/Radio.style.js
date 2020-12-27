import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  @media (min-width: 580px) {
    justify-content: space-evenly;
  }
`;

export const Radio = styled.input`
  margin: 0.5em;
  border: none;
`;

export const Label = styled.label`
  font-size: x-small;
  color: #444;
`;
