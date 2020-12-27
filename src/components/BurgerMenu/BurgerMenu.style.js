import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledMenu = styled.nav`
  display: none;
  padding: 2em 0;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
    display: flex;
    flex-direction: column;
    width: 100%;
    background: ${({ theme }) => theme.white};
    border: 1px solid ${({ theme }) => theme.lightGrey};
    position: fixed;
    top: 0;
    left: 0;
  }
`;
export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.textBlue};
  text-decoration: none;
  text-align: center;
  font-size: 2em;
  padding: 1em;
  text-transform: uppercase;

  &:hover {
    font-weight: bold;
    transition: 0.25s;
    color: ${({ theme }) => theme.magenta};
  }
`;

export const Logo = styled.h1`
  font-weight: initial;
  margin: 2px 0;
  padding: 0.45em 0;
  color: ${({ theme }) => theme.lightGrey};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const Span = styled.span`
  color: rgb(191, 45, 191);
  text-decoration: none;
`;
