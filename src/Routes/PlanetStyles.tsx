import styled from "styled-components";

export const NewDiv = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1140px) {
    grid-template-columns: 1fr;
  }
`;

export const ForGrid = styled.div`
  @media (min-width: 768px) {
    display: grid;
    padding: 3.9rem;
    grid-template-columns: 1fr;
  }
  @media (min-width: 1140px) {
    display: grid;
    grid-template-columns: 50rem 1fr;
    margin: 0 auto;
    grid-column-gap: 6rem;
    max-width: 1110px;
  }
`;

export const SecondHeadline = styled.div`
  display: none;

  @media (min-width: 768px) {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    padding: 2.4rem 0 2.4rem 0;
    border: none;

    button {
      cursor: pointer;
      border: 1px solid hsl(240, 17%, 26%);
      padding: 1.8rem 2.7rem;
      text-align: left;
      position: relative;
      isolation: isolate;
      overflow: hidden;
      font-family: "League Spartan";
      letter-spacing: 2.571px;
      text-transform: uppercase;
      color: #fff;
      background: transparent;
      &::before {
        position: absolute;
        content: "";
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${(props) => props.color};
        transform: scaleX(0);
        transform-origin: center;
        transition: transform 350ms ease;
        inset: 0;
        z-index: -1;
      }
      &:hover::before {
        transform: scaleX(1);
      }
    }
  }
`;

export const HeadLine = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid hsl(240, 17%, 26%);
  padding: 2rem;
  cursor: pointer;

  button {
    cursor: pointer;
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
    display: none;

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
  @media (min-width: 1140px) {
    display: none;
  }
`;

export const NumList = styled.span`
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

export const Image = styled.img`
  width: 50%;
  @media (min-width: 768px) {
    width: 60%;
  }
  @media (min-width: 1140px) {
    width: 100%;
  }
`;
export const Overview = styled.p`
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
  @media (min-width: 1140px) {
    font-size: 14px;
    line-height: 25px;
  }
`;
export const Source = styled.p`
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
export const PlanetImageDiv = styled.div<{ backgroundimg: string | undefined }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 4rem;
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

  @media (min-width: 1140px) {
    height: 58rem;
    margin: unset;
    &::before {
      width: 210.667px;
      height: 233px;
    }
  }
`;
export const BrifInfo = styled.div`
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
  @media (min-width: 1140px) {
    width: 25.5rem;
    align-items: flex-start;
    align-items: center;
  }
`;
export const Title = styled.p`
  color: #838391;
  font-family: "League Spartan";
  font-size: 8px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0.727px;
  text-transform: uppercase;
  @media (min-width: 1140px) {
    font-size: 11px;
    line-height: 25px;
    letter-spacing: 1px;
  }
`;

export const InformationDiv = styled.div`
  width: 100%;
  padding: 1rem 2.4rem;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 0 3.9rem 2.4rem 3.9rem;
    gap: 30px;
  }
  @media (min-width: 1140px) {
    max-width: 1110px;
    margin: 0 auto;
  }
`;

export const Answer = styled.p`
  color: #fff;
  text-align: right;
  font-family: Antonio;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.75px;
  text-transform: uppercase;
  @media (min-width: 1140px) {
    font-size: 40px;
    letter-spacing: -1.5px;
    text-transform: uppercase;
  }
`;

export const OverviewDiv = styled.div`
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
    align-items: flex-start;
    padding: 2.4rem 5.4rem 2.4rem 0;
  }
  @media (min-width: 1140px) {
    h1 {
      font-size: 80px;
    }
  }
`;
