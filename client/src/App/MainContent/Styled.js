import styled from "styled-components";

export const Title = styled.h2`
  margin: 0;
  font-size: 2em;
  font-weight: 700;
  color: #464646;
`;

export const ProjectContainer = styled.div`
  margin: 42px 0 98px 0;
  padding: 1em 15px;
`;

export const Section = styled.section`
  margin-bottom: 118px;
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
