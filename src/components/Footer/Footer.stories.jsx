import { storiesOf } from "@storybook/react";
import React from "react";
import Footer from "./Footer";
import theme from "../../theme";
import { ThemeProvider } from "styled-components";

storiesOf("Footer", module).add("Footer", () => (
  <ThemeProvider theme={theme}>
    <Footer
      email="hi@seathustler.com"
      links={[
        {
          to: "cheap",
          name: "Cheap Flights",
        },
        {
          to: "save",
          name: "Save Up to $550",
        },
        {
          to: "members",
          name: "Members Love Us",
        },
        {
          to: "about",
          name: "About Us",
        },
      ]}
      copyright="@ 2020 SeatHustler.com"
    />
  </ThemeProvider>
));
