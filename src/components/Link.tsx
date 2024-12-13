import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Link = styled.a`
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  padding: 10px 0;

  position: relative;
  z-index: 0;

  &:hover {
    &::before {
      height: 10px;
    }
  }

  &::before {
    content: '';
    display: inline-block;
  
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    background-color: ${theme.colors.accent};
    z-index: -1;
  }
`;