import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../Data/Data.json";
import styled from "styled-components";

export type ImageKeys = "internal" | "geology";

export default function Planets() {
  const params = useParams();
  const [current, setCurrent] = useState("planet");

  console.log(params.planet);
  const planetInfo = Data.find(
    (item) => item.name.toLowerCase() == params.planet?.toLowerCase()
  );

  const handlePlanetClick = (type: string) => {
    if (type == "Overwiew") {
      setCurrent("planet");
    }
    if (type == "structure") {
      setCurrent("internal");
    } else if (type == "surface") {
      setCurrent("planet");
    }
  };
  console.log(planetInfo);

  return (
    <>
      <HeadLine>
        <p onClick={() => handlePlanetClick("Overwiew")}>OVERVIEW</p>
        <p onClick={() => handlePlanetClick("structure")}>Structure</p>
        <p onClick={() => handlePlanetClick("surface")}>Surface </p>
      </HeadLine>
      <MainPage>
        <PlanetImageDiv
          backgroundimg={
            current === "surface" ? planetInfo?.images["geology"] || "" : ""
          }
        >
          <img src={planetInfo?.images[current as ImageKeys]} alt="" />
        </PlanetImageDiv>

        <h1>{planetInfo?.name}</h1>
        <Overview>{planetInfo?.overview.content}</Overview>
        <Source>
          Source:
          <a
            href={planetInfo?.overview.source}
            target="_blank"
            rel="noopener noreferrer"
          >
            Wikipedia
          </a>
        </Source>
        <InformationDiv>
          <BrifInfo>
            <Title>ROTATION TIME</Title>
            <Answer>{planetInfo?.rotation}</Answer>
          </BrifInfo>
          <BrifInfo>
            <Title>REVOLUTION TIME</Title>
            <Answer>{planetInfo?.revolution}</Answer>
          </BrifInfo>
          <BrifInfo>
            <Title>radius</Title>
            <Answer>{planetInfo?.radius}</Answer>
          </BrifInfo>
          <BrifInfo>
            <Title>AVERAGE TEMP.</Title>
            <Answer>{planetInfo?.temperature}</Answer>
          </BrifInfo>
        </InformationDiv>
      </MainPage>
    </>
  );
}

const HeadLine = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid hsl(240, 17%, 26%);
  padding: 2rem;
  p {
    color: #fff;
    text-align: center;
    font-family: Spartan;
    font-size: 9px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.929px;
    text-transform: uppercase;
  }
`;
const MainPage = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 2.4rem;
  h1 {
    color: #fff;
    text-align: center;
    font-family: Antonio;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    margin-bottom: 1.6rem;
  }
`;
const Overview = styled.p`
  color: #fff;
  text-align: center;
  font-family: Spartan;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 3.2rem;
`;
const Source = styled.p`
  color: #838391;
  font-family: Spartan;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  margin-bottom: 2.8rem;
  &::after {
    content: url("./assets/icon-source.svg");
    background-repeat: no-repeat;
  }
  a {
    opacity: 0.5;
    color: #838391;
    font-family: Spartan;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
    text-decoration-line: underline;
  }
`;
const PlanetImageDiv = styled.div<{ backgroundimg: string }>`
  position: relative;
  height: 40rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    position: absolute;
    background-image: url(${(props) => props.backgroundimg});
    background-repeat: no-repeat;
    z-index: 100;
    background-size: 90%;
    width: 158px;
    height: 165px;
    content: "";
    top: 66%;
    left: 50%;
    transform: translateX(-44%);
  }
`;
const BrifInfo = styled.section`
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  padding: 0.9rem 2.4rem 1.3rem;
`;
const Title = styled.p`
  color: #838391;
  font-family: Spartan;
  font-size: 8px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0.727px;
  text-transform: uppercase;
`;

const InformationDiv = styled.div`
  width: 100%;
`;

const Answer = styled.p`
  color: #fff;
  text-align: right;
  font-family: Antonio;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.75px;
  text-transform: uppercase;
`;
