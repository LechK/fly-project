import React from "react";
import { Button, Section, Notification } from "../../components";

function Home() {
  return (
    <>
      <Notification color="success">
        <strong>&#10003;</strong> Your Airport Confirmed!
      </Notification>
      <Section background="gainsboro">
        Welcome to your React boilerplate. We hope that this will bring you up
        to speed with your development.
      </Section>
      <Section>
        <Button color="secondary" handleClick={() => alert("Hi")}>
          Check React out
        </Button>
      </Section>
    </>
  );
}

export default Home;
