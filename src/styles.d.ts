import { ButtonHTMLAttributes } from "react";

declare module "styled-components" {
  export interface DefaultTheme {}
}

export interface StyledBurgerProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  open: boolean;
}

export interface NavListProps {
  open: boolean;
}
