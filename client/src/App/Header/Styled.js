import styled from "styled-components";
import { StyledLink, Type } from "src/App/Common/Styled";

export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  margin-bottom: 100px;
  background-image: radial-gradient(73% 147%, #eadfdf 59%, #ece2df 100%),
    radial-gradient(
      91% 146%,
      rgba(255, 255, 255, 0.5) 47%,
      rgba(0, 0, 0, 0.5) 100%
    );
  background-blend-mode: screen;

  & .fw-500 {
    font-weight: 500;
  }
`;

export const TextContainer = styled.div`
  position: absolute;
  font-family: "Work Sans", sans-serif;
  font-size: 2.5em;
  color: #1d2328;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & .small {
    font-size: 0.6em;
  }
`;

export const HeaderLink = StyledLink.extend``;

export const Initial = styled.span`
  font-size: 1.5em;
`;

export const Line = styled.div`
  & #blinky {
    animation: ${Type} 0.8s step-end infinite alternate;
    border-right: 3px solid #1d2328;
  }
`;

export const Role = styled.span`
  font-size: 0.6em;
`;
