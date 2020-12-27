import styled from "styled-components";
import pic from "../../assets/picture.jpg";
import wave from "../../assets/wave.svg";

export const SubscribeSection = styled.div`
  @media (min-width: ${({ theme }) => theme.mobile}) {
    &&Heading {
      width: 50%;
    }
  }
  background-image: url(${pic});
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: center;
  background-position: center;
  background-size: cover;
  text-align: center;
  margin-top: 0;
  height: 70vh;
  && Input {
    margin-bottom: 1.5em;
  }
`;

export const Heading = styled.h1`
  padding-top: 1em;
  color: white;
  margin: 0;
  font-size: 2.3em;
  padding-bottom: 1em;
  @media (min-width: 410px) {
    width: 400px;
    margin: 0 auto;
  }
`;

export const Wave = styled.div`
  background-image: url(${wave});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  margin-top: 30px;
  margin-bottom: -5px;
  height: 310px;
  @media (min-width: ${({ theme }) => theme.mobile}) {
  }
`;
