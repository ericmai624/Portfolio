import styled from "styled-components";
import { Type } from "src/App/Common/Styled";

export const TextContainer = styled.div.attrs({
  className: "row"
})`
  font-family: "Work Sans", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8em;
  color: #1d2328;
  z-index: -2;
`;

export const Blinky = styled.span`
  animation: ${Type} 0.8s step-end infinite alternate;
  border-right: 3px solid #1d2328;
`;
