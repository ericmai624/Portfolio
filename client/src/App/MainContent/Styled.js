import styled from "styled-components";

export const TitleContainer = styled.div`
  position: relative;
  margin-bottom: 100px;

  &::after {
    position: absolute;
    content: "";
    left: 50%;
    width: 150px;
    height: calc(100% + 25px);
    margin-left: -75px;
    border-bottom: 2px solid #ff4e50;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 2em;
  font-weight: 700;
  color: #464646;
`;

export const Section = styled.section`
  margin-bottom: 200px;
`;

export const SectionII = Section.extend`
  position: relative;
  padding: 50px 0;
  height: 600px;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    left: -25px;
    top: -25px;
    width: calc(100% + 50px);
    height: calc(100% + 50px);
    z-index: -1;
    background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);
    ${"" /* background-repeat: no-repeat;
    background-size: cover;
    background-position: center center; */};
  }
`;
