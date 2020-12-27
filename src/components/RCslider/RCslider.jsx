import React from "react";

import * as S from "./RCslider.style";

function RCslider({ value, minusClick, plusClick, min, max, onChange }) {
  return (
    <>
      <S.CurrentValue>{value}</S.CurrentValue>
      <S.SliderLine>
        <S.Button onClick={minusClick}>
          <S.Minus />
        </S.Button>
        <S.StyledSlider
          value={value}
          min={min}
          max={max}
          step={1}
          onChange={onChange}
        />
        <S.Button onClick={plusClick}>
          <S.Minus />
          <S.Plus />
        </S.Button>
      </S.SliderLine>
    </>
  );
}
export default RCslider;
