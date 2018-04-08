import styled from 'styled-components';

export const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: transparent;
  user-select: none;
  color: ${({ dynamicStyles }) => dynamicStyles.fontColor};
`;

export const SlideBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: ${({ dynamicStyles }) => (dynamicStyles.isVisible ? 'none' : 'translateX(-100%)')};
  width: 100%;
  height: 100vh;
  overflow: auto;
  background: ${({ dynamicStyles }) => dynamicStyles.bgColor};
  z-index: -1;
  transition: transform 0.5s ease-in-out;
`;

export const Greetings = styled.div`
  position: absolute;
  top: 50%;
  left: 25%;
  transform: translateY(-50%);
  font-size: 2.3em;
`;
