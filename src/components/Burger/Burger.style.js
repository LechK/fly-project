import styled from "styled-components";

export const StyledBurger = styled.button`
  display: none;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: transparent;
    border: none;
    width: 1.5em;
    height: 1.5em;
    z-index: 10;

    div {
      width: 1.5rem;
      border: none;
      height: 0.1rem;
      background: ${({ theme, open }) =>
        open ? theme.textGrey : theme.textGrey};
      border-radius: 10px;
      transition: all 0.3s linear;
      transform-origin: 1px;

      :first-child {
        transform: ${({ open }) => (open ? "rotate(37deg)" : "rotate(0)")};
        width: ${({ open }) => (open ? "1.8em" : "rotate(0)")};
      }
      :nth-child(2) {
        opacity: ${({ open }) => (open ? "0" : "1")};
        transform: ${({ open }) =>
          open ? "translateX(20px)" : "translateX(0)"};
      }
      :nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-37deg)" : "rotate(0)")};
        width: ${({ open }) => (open ? "1.8em" : "rotate(0)")};
      }
    }
  }
`;
