import React from "react";
import { useParams } from "react-router-dom";
import Data from "../Data/Data.json";

export default function Planets() {
  const params = useParams();
  console.log(params.planet);
  const planetInfo = Data.find(
    (item) => item.name.toLowerCase() == params.planet?.toLowerCase()
  );
  return <div>{planetInfo?.name}</div>;
}
