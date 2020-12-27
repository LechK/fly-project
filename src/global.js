import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle` 
  body {    
    background: ${({ theme }) => theme.white};  
    text-rendering: optimizeLegibility;
    font-family: 'Alata', sans-serif;
  }
`;
