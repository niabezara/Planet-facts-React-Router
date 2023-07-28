import { Link } from "react-router-dom";
import Data from "../Data/Data.json";
import styled from "styled-components";

export default function DesktopVersionNavBar({
  navigate,
}: {
  navigate: () => void;
}) {
  return (
    <HeaderStyled>
      <NavWrapper>
        <Link to="/" onClick={() => navigate()}>
          <Logo>THE PLANETS</Logo>
        </Link>

        <NavList>
          {Data.map((item) => {
            return (
              <List key={item.name} color={item.color}>
                <Link to={`/${item.name}`}>{item.name}</Link>
              </List>
            );
          })}
        </NavList>
      </NavWrapper>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  border-bottom: 1px solid hsl(240, 17%, 26%);
  padding: 3.6rem 5.1rem;
`;
const Logo = styled.h1`
  color: #fff;
  font-family: Antonio;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -1.05px;
  text-transform: uppercase;
`;

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 3.9rem;
  a {
    text-decoration: none;
  }
  @media (min-width: 1140px) {
    flex-direction: unset;
    justify-content: space-between;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 3.3rem;
`;

const List = styled.li<{ color: string }>`
  position: relative;
  a {
    color: #fff;
    font-family: "League Spartan";
    font-size: 11px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
    text-decoration: none;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
  }

  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: ${(props) => props.color};
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 350ms ease;
  }
`;
