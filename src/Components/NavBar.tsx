import styled from "styled-components";
import Data from "../Data/Data.json";
import { Link } from "react-router-dom";
import { StyledBurgerProps, NavListProps } from "../styles";

export default function NavBar({
  setOpen,
  open,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <header>
      <StyledMenu>
        <Subnav>
          <Logo>THE PLANETS</Logo>
          <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
          </StyledBurger>
        </Subnav>

        <NavList open={open}>
          {Data.map((item) => {
            return (
              <li key={item.name}>
                <Link to={`/${item.name}`}>{item.name}</Link>
              </li>
            );
          })}
        </NavList>
      </StyledMenu>
    </header>
  );
}

export const StyledBurger = styled.button<StyledBurgerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
  :first-child {
    transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
  }

  :nth-child(2) {
    opacity: ${({ open }) => (open ? "0" : "1")};
    transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
  }

  :nth-child(3) {
    transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
  }
`;
export const StyledMenu = styled.nav`
  text-align: left;
  padding: 1.6rem 2.4rem;
  transition: transform 0.3s ease-in-out;
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

const NavList = styled.ul<{ open: boolean }>`
  display: flex;
  list-style: none;
  height: 100%;
  flex-flow: column nowrap;
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  right: 0;
  width: 100%;
  padding: 2rem 2.4rem;
  transition: transform 0.3s ease-in-out;
  z-index: 999;
  li {
    position: relative;
    padding-left: 2.5rem;
    border-bottom: 1px solid hsl(240, 17%, 26%);

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      background-color: ${(props) => props.color};
      border-radius: 50%;
      transform: translateY(-50%);
      width: 2rem;
      height: 2rem;
    }
    a {
      color: #fff;
      text-align: center;
      font-family: Spartan;
      font-size: 15px;
      font-style: normal;
      font-weight: 700;
      line-height: 25px; /* 166.667% */
      letter-spacing: 1.364px;
      text-transform: uppercase;
      text-decoration: none;
      padding: 20px 0 20px 44px;
      display: flex;
      justify-content: space-between;
      &::after {
        content: url("/icon-chevron.svg");
      }
    }
  }
`;

const Subnav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
