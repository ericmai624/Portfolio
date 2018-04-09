import styled from 'styled-components';

const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: #000;
  user-select: none;
  color: ${({ dynamicStyles }) => dynamicStyles.fontColor};

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    transform: ${({ dynamicStyles }) => (dynamicStyles.isBlackBg ? 'translateX(-100%)' : 'none')};
    background: #fff;
    width: 100%;
    height: 100vh;
    z-index: -1;
    transition: transform 0.35s ease-in-out;
  }
`;

export default ContentWrapper;
