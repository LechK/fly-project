import React from "react";
import * as S from "./Notification.style";

function Notification({ children, color }) {
  return <S.Notification color={color}>{children}</S.Notification>;
}

export default Notification;
