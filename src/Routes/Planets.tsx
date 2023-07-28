import { useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../Data/Data.json";
import {
  HeadLine,
  NumList,
  PlanetImageDiv,
  ForGrid,
  Overview,
  OverviewDiv,
  Image,
  NewDiv,
  Source,
  InformationDiv,
  BrifInfo,
  Answer,
  Title,
  SecondHeadline,
} from "./PlanetStyles";

export type ImageKeys = "internal" | "geology";

export default function Planets() {
  const params = useParams();
  const [current, setCurrent] = useState("planet");
  const [surface, setSurface] = useState(false);

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

  return (
    <div>
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
      <ForGrid>
        <PlanetImageDiv
          backgroundimg={surface ? planetInfo?.images.geology : ""}
        >
          <Image
            src={planetInfo?.images[current as ImageKeys]}
            // desktopimgwidth={planetInfo?.desktopimgwidth}
            // tabletimgwidth={planetInfo?.tabletimgwidth}
            // mobileimgwidth={planetInfo?.mobileimgwidth}
            alt=""
          />
        </PlanetImageDiv>
        <NewDiv>
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
          <SecondHeadline color={planetInfo?.color}>
            <button onClick={() => handlePlanetClick("Overwiew")}>
              <NumList>01</NumList> OVERVIEW
            </button>
            <button onClick={() => handlePlanetClick("structure")}>
              <NumList>02</NumList> STRUCTURE
            </button>
            <button onClick={() => handlePlanetClick("surface")}>
              <NumList>03</NumList> SURFACE
            </button>
          </SecondHeadline>
        </NewDiv>
      </ForGrid>
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
    </div>
  );
}
