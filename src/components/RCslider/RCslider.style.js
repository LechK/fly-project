import styled from "styled-components";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export const SliderLine = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const StyledSlider = styled(Slider)`
  width: 70%;
  color: blue;
`;

export const CurrentValue = styled.h1`
  color: ${({ theme }) => theme.textBlue};
  margin: 0;
  font-size: 2.7em;
`;

//PLUS AND MINUS BUTTON COMPONENTS
export const Button = styled.div`
  border-radius: 50%;
  cursor: pointer;
  border: 3px solid ${({ theme }) => theme.textBlue};
  background-color: transparent;
  height: 20px;
  color: ${({ theme }) => theme.textBlue};
  font-weight: bold;
  width: 20px;
`;
export const Minus = styled.div`
  border: 2px solid ${({ theme }) => theme.textBlue};
  width: 55%;
  margin: 8px auto;
`;
export const Plus = styled.div`
  border: 2px solid ${({ theme }) => theme.textBlue};
  width: 60%;
  margin: -12px auto;
  transform: rotate(90deg);
`;
