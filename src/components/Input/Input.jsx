import React from "react";
import * as S from "./Input.style";

function Input({ type, placeholder, handleChange, value, name }) {
  return (
    <>
      <S.Input
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        name={name}
        required
      ></S.Input>
    </>
  );
}

export default Input;
