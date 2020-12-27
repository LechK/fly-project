import React, { useState } from "react";
import {
  Button,
  Section,
  Notification,
  Input,
  Radio,
  RCslider,
} from "../../components";
import * as S from "./Home.style";

function Home() {
  const [number, setNumber] = useState(1);
  const [people, setPeople] = useState(1);
  const [option, setOption] = useState("no");

  const [notification, setNotification] = useState();

  //function to calculate savings, on option value, if they are clients, or they are not
  function calculate() {
    if (option === "yes") {
      return <S.H1>${people * number * 26}</S.H1>;
    } else {
      return <S.H1>$0</S.H1>;
    }
  }

  return (
    <>
      <Notification color="success" handleChange={() => setNotification(false)}>
        &#10003; Your Airport Confirmed!
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
        <S.H2>Calculate Your Savings!</S.H2>
        <S.CalculationBox>
          <S.CalcHeading>
            How many times do you plan to travel in the next 12 months?
          </S.CalcHeading>
          <RCslider
            min={0}
            max={12}
            value={number}
            onChange={(e) => setNumber(e)}
            minusClick={() => setNumber(number - 1)}
            plusClick={() => setNumber(number + 1)}
          />
          <S.CalcHeading>
            How many people will be travelling (including you)?
          </S.CalcHeading>
          <RCslider
            min={1}
            max={9}
            value={people}
            onChange={(e) => setPeople(e)}
            minusClick={() => setPeople(people - 1)}
            plusClick={() => setPeople(people + 1)}
          />
          <S.CalcHeading>Are you a member of SeatHustler.com?</S.CalcHeading>
          <div>
            <Radio
              options={[
                {
                  id: "yes",
                  name: "flight",
                  value: "yes",
                  text: "Yes, I love cheap flights",
                },
                {
                  id: "no",
                  name: "flight",
                  value: "no",
                  text: "No, I don't",
                },
              ]}
              handleChange={(e) => setOption(e.target.value)}
            />
          </div>
          <S.Line />
          <S.H2>Your total savings</S.H2>
          {calculate()}
          <Button color="secondary">
            <strong>&#10003;</strong>Start Saving
          </Button>
        </S.CalculationBox>
      </Section>
    </>
  );
}

export default Home;
