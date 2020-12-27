import styled from "styled-components";

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.darkBlue};
  text-align: center;
  margin: 0 auto;
  padding: 2em;
  font-family: "Alata", sans-serif;
`;

export const Heading = styled.h4`
  color: ${({ theme }) => theme.white};
  margin: 0;
`;
export const Email = styled.a`
  color: ${({ theme }) => theme.skyBlue};
  text-decoration: none;
`;
export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 2em 0;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.white};
  text-decoration: none;
  padding: 0.4em 0;
`;

export const Copyright = styled.p`
  color: ${({ theme }) => theme.white};
  margin: 0;
`;
