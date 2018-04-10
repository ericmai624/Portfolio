import styled from "styled-components";

const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: ${({ appState }) => (appState.displayGreeting ? "hidden" : "auto")};
  z-index: 1;
  background: transparent;
  user-select: none;
  color: ${({ appState }) => appState.fontColor};

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    transform: ${({ appState }) =>
      appState.isBlackBg ? "none" : "translateX(100%)"};
    background: #000;
    width: 100%;
    height: 100vh;
    z-index: -1;
    transition: transform 0.35s ease-in-out;
  }
`;

export default ContentWrapper;
