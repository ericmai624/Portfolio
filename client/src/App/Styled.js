import styled from 'styled-components';

export const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: transparent;
  user-select: none;
  color: ${({ dynamicStyles }) => dynamicStyles.fontColor};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    transform: ${({ dynamicStyles }) => (dynamicStyles.isVisible ? 'none' : 'translateX(-100%)')};
    background: ${({ dynamicStyles }) => dynamicStyles.bgColor};
    width: 100%;
    height: 100vh;
    z-index: -1;
    transition: transform 0.5s ease-in-out;
  }
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 25%;
  transform: translateY(-50%);
  font-size: 2.3em;
`;

export const Msg = styled.div`
  display: inline-block;
  margin: 0 -15px 0.5em -15px;  
`;

