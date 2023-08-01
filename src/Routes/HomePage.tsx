import { styled, keyframes } from "styled-components";

const planetOrbitAnimation = keyframes`
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

export default function HomePage() {
  return (
    <>
      <Container>
        <Sun></Sun>
        <MercuryOrbit>
          <Mercury></Mercury>
        </MercuryOrbit>
        <VenusOrbit>
          <Venus></Venus>
        </VenusOrbit>
        <EarthOrbit>
          <Earth>
            <MoonOrbit>
              <Moon></Moon>
            </MoonOrbit>
          </Earth>
        </EarthOrbit>
        <MarsOrbit>
          <Mars></Mars>
        </MarsOrbit>

        <JupiterOrbit>
          <Jupiter></Jupiter>
        </JupiterOrbit>

        <SaturnOrbit>
          <SaturnRing>
            <Saturn></Saturn>
          </SaturnRing>
        </SaturnOrbit>

        <UranusOrbit>
          <Uranus></Uranus>
        </UranusOrbit>

        <NeptuneOrbit>
          <Neptune></Neptune>
        </NeptuneOrbit>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 101vh;
  overflow: hidden;
  position: relative;
`;

const Sun = styled.div`
  background-color: #ebcb8b;
  width: 58px;
  height: 58px;
  border-radius: 29px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  box-shadow: 0px 0px 30px 5px #d08770;
`;

const MercuryOrbit = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100px;

  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  animation: ${planetOrbitAnimation} 8.8s infinite linear;
  animation-duration: 8.8s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;
const Mercury = styled.div`
  background-color: #d08770;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  margin: -5px 50px;
`;
const VenusOrbit = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 100px;

  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  animation: ${planetOrbitAnimation} 8.8s infinite linear;
  animation-duration: 22.5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const Venus = styled.div`
  background-color: #bf616a;
  width: 15px;
  height: 15px;
  border-radius: 7.5px;
  margin: -5px 50px;
`;

const EarthOrbit = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 100px;

  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  animation: ${planetOrbitAnimation} 8.8s infinite linear;
  animation-duration: 36.5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const Earth = styled.div`
  position: relative;
  background-color: #88c0d0;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  margin: -10px 100px;
`;

const MoonOrbit = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 15px;

  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  animation: ${planetOrbitAnimation} 8.8s infinite linear;
  animation-duration: 2.7s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const Moon = styled.div`
  background-color: #d8dee9;
  width: 3px;
  height: 3px;
  border-radius: 1.5px;
  margin: -1.5px 15px;
`;
const MarsOrbit = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 125px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${planetOrbitAnimation} 8.8s infinite linear;
  animation-duration: 68.7s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const Mars = styled.div`
  background-color: #bf616a;
  width: 17px;
  height: 17px;
  border-radius: 8.5px;
  margin: -8.5px 125px;
`;

const JupiterOrbit = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 175px;

  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  animation: ${planetOrbitAnimation} 8.8s infinite linear;
  animation-duration: 438s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const Jupiter = styled.div`
  background-color: #d08770;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin: -20px 175px;
`;

const SaturnOrbit = styled.div`
  width: 450px;
  height: 450px;
  border-radius: 225px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-name: planet-orbit;
  animation-duration: 1058.5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const SaturnRing = styled.div`
  border-color: #ebcb8b;
  width: 34px;
  height: 34px;
  border-radius: 25px;
  border-width: 2px;
  border-style: solid;

  margin: -17px 225px;
`;

const Saturn = styled.div`
  background-color: #ebcb8b;
  width: 28px;
  height: 28px;
  border-radius: 20px;

  margin-top: 3px;
  margin-left: 3px;
`;

const UranusOrbit = styled.div`
  width: 550px;
  height: 550px;
  border-radius: 275px;

  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  animation: ${planetOrbitAnimation} 8.8s infinite linear;
  animation-duration: 3066s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const Uranus = styled.div`
  background-color: #81a1c1;
  width: 22px;
  height: 22px;
  border-radius: 11px;
  margin: -11px 275px;
`;

const NeptuneOrbit = styled.div`
  width: 620px;
  height: 620px;
  border-radius: 310px;

  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  animation: ${planetOrbitAnimation} 8.8s infinite linear;
  animation-duration: 6022.5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const Neptune = styled.div`
  background-color: #5e81ac;
  width: 18px;
  height: 18px;
  border-radius: 9px;
  margin: -9px 310px;
`;
