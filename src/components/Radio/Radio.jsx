import React from "react";
import * as S from "./Radio.style";

function Radio({ options, handleChange }) {
  return (
    <S.Box>
      {options &&
        options.map((option) => {
          return (
            <div key={option.id}>
              <S.Radio
                type="radio"
                id={option.id}
                name={option.name}
                onChange={handleChange}
                value={option.value}
              />
              <S.Label htmlFor={option.name}>{option.text}</S.Label>
            </div>
          );
        })}
    </S.Box>
  );
}

export default Radio;
