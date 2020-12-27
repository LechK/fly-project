import React, { useState } from "react";
import {
  Button,
  Section,
  Notification,
  Input,
  Radio,
  RCslider,
} from "../../components";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import * as S from "./Home.style";

function Home() {
  const [email, setEmail] = useState();

  const [number, setNumber] = useState(1);
  const [people, setPeople] = useState(1);
  const [option, setOption] = useState("no");

  const [notification, setNotification] = useState();
  const [error, setError] = useState();

  //mailchimp url
  const url =
    "https://inbox.us7.list-manage.com/subscribe/post?u=6de907c571aa07ed87ce5deec&amp;id=00f71256a5";

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
      {notification && (
        <Notification
          color="success"
          handleChange={() => setNotification(false)}
        >
          &#10003; {notification}
        </Notification>
      )}
      {error && (
        <Notification color="error" handleChange={() => setNotification(false)}>
          &#10003; {error}
        </Notification>
      )}

      {/* SUBSCRIBE SECTION */}

      <S.SubscribeSection>
        <S.Heading>Grab Flight Deals While They're Hot</S.Heading>
        {/* mailchim post */}
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status }) => {
            if (status === "success") {
              setNotification("Succesfully subscribed!");
            } else if (status === "error") {
              setError("This Email Already Subscribed!");
            }

            return (
              <div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    subscribe({ EMAIL: email });
                  }}
                >
                  <Input
                    type="email"
                    placeholder="Enter Your E-Mail"
                    handleChange={(e) => setEmail(e.target.value)}
                  />
                  <Button color="primary">SUBSCRIBE FOR BEST DEALS</Button>
                </form>
              </div>
            );
          }}
        />
        <S.Wave />
      </S.SubscribeSection>

      {/* CALCULATE SECTION */}

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
