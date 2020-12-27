import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.lightGrey};
  padding: 1em;
  background-color: ${({ theme }) => theme.white};
`;

export const Logo = styled.img`
  max-height: 30px;

  max-width: 100%;
`;
