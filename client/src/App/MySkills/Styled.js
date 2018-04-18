import styled from "styled-components";

export const SkillsContainer = styled.div.attrs({
  className: "skills row justify-content-center align-items-center"
})`
  width: 100%;
  margin: 1em 0;
`;

export const Bracket = styled.div`
  color: ${({ theme }) => theme.main};
  font-weight: 700;

  @media screen and (min-width: 576px) {
    padding: 0 2.5%;
    font-size: 95%;
  }
  @media screen and (max-width: 576px) {
    padding: 0 1px;
    font-size: 80%;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 576px) {
    font-size: 95%;
  }
  @media screen and (max-width: 576px) {
    font-size: 80%;
  }
`;

export const Content = styled.span`
  display: inline-block;
  box-sizing: border-box;

  @media screen and (min-width: 576px) {
    padding: 0 2.5px;
  }
  @media screen and (max-width: 576px) {
    padding: 0 1px;
  }
`;

export const Comma = styled.span`
  color: #999999;

  @media screen and (min-width: 576px) {
    padding: 0 2.5px;
  }
  @media screen and (max-width: 576px) {
    padding: 0;
  }
`;
