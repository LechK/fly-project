import React from "react";
import { Button, Section, Notification, Input } from "../../components";
import * as S from "./Home.style";

function Home() {
  return (
    <>
      <Notification color="success">
        <strong>&#10003;</strong> Your Airport Confirmed!
      </Notification>
      <S.SubscribeSection>
        <S.Heading>Grab Flight Deals While They're Hot</S.Heading>

        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Input
            type="email"
            placeholder="Enter Your E-Mail"
            handleChange={(e) => console.log(e.target.value)}
          />
          <Button color="primary">SUBSCRIBE FOR BEST DEALS</Button>
        </form>
        <S.Wave />
      </S.SubscribeSection>
      <Section>
        <Button color="secondary" handleClick={() => alert("Hi")}>
          Check React out
        </Button>
      </Section>
    </>
  );
}

export default Home;
