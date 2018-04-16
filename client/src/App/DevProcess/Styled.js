import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(styled.div.attrs({
  className: "container"
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #747678;
`)`
  &&& {
    max-width: 720px;
  }
`;

export const Back = styled(Link)`
  font-size: 1em;
  outline: none;
  text-decoration: none;
  cursor: pointer;
  color: #000;
  align-self: start;
  margin: 15px;
  line-height: 2;
  border-bottom: 2px solid transparent;
  transition: all 0.25s ease-in;

  &:hover {
    border-bottom: 2px solid #000;
  }
`;

export const SectionTitle = styled.div.attrs({
  className: "row"
})`
  width: 100%;
  padding: 30px 15px 0 15px;
  font-size: 1.5em;
  font-weight: 500;
  color: #000;

  &:first-of-type {
    margin-top: 50px;
  }
`;

export const Section = styled.section`
  width: 100%;
  padding: 15px;
`;

export const Description = styled.p`
  line-height: 1.8;
  font-size: 1.1em;
`;

export const WireframeImg = styled.img`
  width: 100%;
`;

export const WireframeImgWrapper = styled.div.attrs({
  className: "col-12 col-lg-6"
})`
  padding: 10px 0;
`;

export const PlanningFig = styled.figure`
  border: 1px solid #e3e3e3;
  margin: 10px 0;

  @media screen and (min-width: 768px) {
    margin-left: -30px;
    margin-right: -30px;
  }
`;

export const StoriesList = styled.ul`
  padding-left: 18px;
`;

export const StoriesItem = styled.li`
  margin: 15px 0;
`;

export const TechStackWrapper = styled.span`
  margin-right: 1em;
  font-size: 3em;
  color: #000;
`;
