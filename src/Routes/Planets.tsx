import { useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../Data/Data.json";
import styled from "styled-components";

export type ImageKeys = "internal" | "geology";

export default function Planets() {
  const params = useParams();
  const [current, setCurrent] = useState("planet");
  const [surface, setSurface] = useState(false);

  console.log(params.planet);
  const planetInfo = Data.find(
    (item) => item.name.toLowerCase() == params.planet?.toLowerCase()
  );

  const handlePlanetClick = (type: string) => {
    if (type == "Overwiew") {
      setCurrent("planet");
      setSurface(false);
    }
    if (type == "structure") {
      setCurrent("internal");
      setSurface(false);
    } else if (type == "surface") {
      setCurrent("planet");
      setSurface(true);
    }
  };
  console.log(planetInfo);

  return (
    <Container>
      <HeadLine color={planetInfo?.color}>
        <button onClick={() => handlePlanetClick("Overwiew")}>
          <NumList>01</NumList> OVERVIEW
        </button>
        <button onClick={() => handlePlanetClick("structure")}>
          <NumList>02</NumList> Structure
        </button>
        <button onClick={() => handlePlanetClick("surface")}>
          <NumList>03</NumList> Surface
        </button>
      </HeadLine>
      <PlanetImageDiv backgroundimg={surface ? planetInfo?.images.geology : ""}>
        <Image
          src={planetInfo?.images[current as ImageKeys]}
          desktopImgWidth={planetInfo?.desktopImgWidth}
          tabletImgWidth={planetInfo?.tabletImgWidth}
          mobileImgWidth={planetInfo?.mobileImgWidth}
          alt=""
        />
      </PlanetImageDiv>
      <OverviewDiv>
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
      </OverviewDiv>
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
    </Container>
  );
}

const Container = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 3.9rem;
  }
`;

const HeadLine = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid hsl(240, 17%, 26%);
  padding: 2rem;

  button {
    color: #fff;
    text-align: center;
    font-family: "League Spartan";
    font-size: 9px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.929px;
    text-transform: uppercase;
    border: none;
    background: transparent;
    position: relative;
    &::before {
      position: absolute;
      content: "";
      bottom: -20px;
      left: 0;
      width: 100%;
      height: 4px;
      background-color: ${(props) => props.color};
      transform: scaleX(0);
      transform-origin: center;
      transition: transform 350ms ease;
    }
    &:hover::before {
      transform: scaleX(1);
    }
  }
  @media (min-width: 768px) {
    grid-area: 2/-2;
    display: flex;
    flex-direction: column;
    padding: 2.4rem 0 2.4rem 0;
    border: none;
    button {
      border: 1px solid hsl(240, 17%, 26%);
      padding: 1.8rem 2.7rem;
      text-align: left;
      position: relative;
      isolation: isolate;
      overflow: hidden;
      &::before {
        background-color: ${(props) => props.color};
        content: "";
        position: absolute;
        inset: 0;
        z-index: -1;
        height: 100%;
      }
    }
  }
`;

const NumList = styled.span`
  display: none;
  visibility: hidden;
  @media (min-width: 768px) {
    display: inline-block;
    visibility: initial;
    color: #838391;
    margin-right: 1.5rem;
    font-size: 9px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 1.929px;
    text-transform: uppercase;
  }
`;

const Image = styled.img<{
  mobileImgWidth: string | undefined;
  tabletImgWidth: string | undefined;
}>`
  max-width: ${(props) => props.mobileImgWidth};
  background-size: 100%;
  @media (min-width: 768px) {
    max-width: ${(props) => props.tabletImgWidth};
  }
`;
const Overview = styled.p`
  color: #fff;
  text-align: center;
  font-family: "League Spartan";
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 3.2rem;
  @media (min-width: 768px) {
    text-align: left;
  }
`;
const Source = styled.p`
  color: #838391;
  font-family: "League Spartan";
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
    font-family: "League Spartan";
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
    text-decoration-line: underline;
  }
`;
const PlanetImageDiv = styled.div<{ backgroundimg: string | undefined }>`
  position: relative;
  height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    position: absolute;
    background-image: url(${(props) => props.backgroundimg});
    background-repeat: no-repeat;
    z-index: 100;
    background-size: 90%;
    width: 110px;
    height: 150px;
    content: "";
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
  }
  @media (min-width: 768px) {
    grid-area: 1 / 1 / span 1 / 3;
  }
`;
const BrifInfo = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  padding: 0.9rem 2.4rem 1.3rem;
  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: unset;
    align-items: flex-start;
  }
`;
const Title = styled.p`
  color: #838391;
  font-family: "League Spartan";
  font-size: 8px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0.727px;
  text-transform: uppercase;
`;

const InformationDiv = styled.div`
  width: 100%;
  padding: 1rem 2.4rem;
  @media (min-width: 768px) {
    grid-area: 3 / 1 / span 1 / 3;
    display: flex;
    justify-content: space-between;
    padding: 2.4rem 0 2.4rem 0;
  }
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

const OverviewDiv = styled.div`
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
  @media (min-width: 768px) {
    grid-area: 2;
    align-items: flex-start;
    padding: 2.4rem 2.4rem 2.4rem 0;
  }
`;
