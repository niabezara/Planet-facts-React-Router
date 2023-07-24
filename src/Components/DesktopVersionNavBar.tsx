import { Link } from "react-router-dom";
import Data from "../Data/Data.json";
import styled from "styled-components";

export default function DesktopVersionNavBar() {
  return (
    <header>
      <NavWrapper>
        <h1>THE PLANETS</h1>
        <ul>
          {Data.map((item) => {
            return (
              <li key={item.name} color={item.color}>
                <Link to={`/${item.name}`}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </NavWrapper>
    </header>
  );
}

const NavWrapper = styled.nav`
  flex-flow: column;
`;
