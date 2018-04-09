import styled from 'styled-components';

export const ContentWrapper = styled.div`
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
    transform: ${({ dynamicStyles }) => (dynamicStyles.isVisible ? 'none' : 'translateX(-100%)')};
    background: #fff;
    width: 100%;
    height: 100vh;
    z-index: -1;
    transition: transform 0.35s ease-in-out;
  }
`;

export const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 25%;
  transform: translateY(-50%);
  font-size: 2.3em;

  @media screen and (max-width:992px) {
    left: 0;
    width: 100%;
    align-items: center;
  }
`;

export const Msg = styled.div`
  display: inline-block;
  margin-bottom: 0.5em;  
`;

