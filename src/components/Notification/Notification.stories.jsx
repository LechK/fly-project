import { storiesOf } from "@storybook/react";
import React from "react";
import Notification from "./Notification";
import theme from "../../theme";
import { ThemeProvider } from "styled-components";

storiesOf("Notifications", module)
  .add("Success Notification", () => (
    <ThemeProvider theme={theme}>
      <Notification color="success">
        <strong>&#10003;</strong> Your Airport Confirmed!
      </Notification>
    </ThemeProvider>
  ))
  .add("Error Notification", () => (
    <ThemeProvider theme={theme}>
      <Notification>Something went wrong!</Notification>
    </ThemeProvider>
  ));
