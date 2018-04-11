import styled from "styled-components";
import { Type } from "src/App/Common/Styled";

export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  margin-bottom: 167px;
  background-image: radial-gradient(73% 147%, #eadfdf 59%, #ece2df 100%),
    radial-gradient(
      91% 146%,
      rgba(255, 255, 255, 0.5) 47%,
      rgba(0, 0, 0, 0.5) 100%
    );
  background-blend-mode: screen;
`;

export const TextContainer = styled.div`
  position: absolute;
  font-family: "Work Sans", sans-serif;
  font-size: 2.5em;
  color: #1d2328;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Intro = styled.span`
  font-size: 1.3em;
  font-weight: 500;
`;

export const Blinky = styled.span`
  animation: ${Type} 0.8s step-end infinite alternate;
  border-right: 3px solid #1d2328;
`;

export const Role = styled.span`
  font-size: 0.6em;
`;
