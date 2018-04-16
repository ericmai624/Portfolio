import styled from "styled-components";

export const Section = styled.section.attrs({
  className: "container"
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: ${({ fluid }) => (fluid ? "auto" : "100%")};
  margin-bottom: 200px;

  &:first-of-type {
    margin-bottom: 0;
  }
`;

export const TitleWrapper = styled.div.attrs({
  className: "container"
})`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
`;

export const Title = styled.h2.attrs({
  className: "section-title"
})`
  position: relative;
  margin: 0;
  font-size: 1em;
  font-weight: 700;
  line-height: 3em;
  color: #464646;

  &::after {
    position: absolute;
    content: "";
    display: inline-block;
    left: 50%;
    bottom: 0;
    width: 25%;
    transform: translate3d(-50%, 0, 0);
    border-bottom: 2px solid ${({ theme }) => theme.main};
  }
`;
