import styled from "styled-components";

export const ChromeWrapper = styled.div`
  @media screen and (max-width: 992px) {
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;

export const TitleBar = styled.div`
  display: flex;
  align-items: center;
  background: #d4d4d4;
  height: 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const Buttons = styled.span`
  border-radius: 50%;
  background: ${({ color }) => color};
  width: 12px;
  height: 12px;
  margin-left: 5px;

  &:first-of-type {
    margin-left: 15px;
  }
`;

export const Screenshot = styled.img`
  width: 100%;
`;
