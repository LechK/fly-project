import React from "react";
import * as S from "./Notification.style";

function Notification({ children, color, handleChange }) {
  return (
    <S.Box>
      <S.Notification color={color}>
        {children}
        <S.NotificationButton onClick={handleChange}>X</S.NotificationButton>
      </S.Notification>
    </S.Box>
  );
}

export default Notification;
