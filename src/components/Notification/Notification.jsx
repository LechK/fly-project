import React, { useState } from "react";
import * as S from "./Notification.style";

function Notification({ children, color, display }) {
  const [disp, setDisplay] = useState("block");
  display = disp;

  return (
    <S.Box display={display}>
      <S.Notification color={color}>
        {children}
        <S.NotificationButton
          onClick={() => {
            setDisplay("none");
          }}
        >
          <S.Line />
          <S.Line2 />
        </S.NotificationButton>
      </S.Notification>
    </S.Box>
  );
}

export default Notification;
