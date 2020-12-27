import { storiesOf } from "@storybook/react";
import React from "react";
import Input from "./Input";
import theme from "../../theme";
import { ThemeProvider } from "styled-components";

storiesOf("Inputs", module).add("Email-Input", () => (
  <ThemeProvider theme={theme}>
    <Input type="email" placeholder="Enter Your E-Mail" />
  </ThemeProvider>
));
