import styled from "styled-components";
import { StyledLink } from "src/App/Common/Styled";

export const Wrapper = styled.div.attrs({
  className: "row justify-content-center"
})`
  @media screen and (max-width: 992px) {
    padding: 0 15px;
  }
`;

export const Container = styled.div.attrs({
  className: "col-12 col-lg-10 featured-project"
})`
  @media screen and (min-width: 992px) {
    overflow: hidden;
    border-radius: 4px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;

export const DetailContainer = styled.div`
  width: 100%;

  @media screen and (min-width: 992px) {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 20px;
    left: 0;
    width: 100%;
    height: calc(100% - 20px);
    padding: 0 10%;
    overflow: hidden;
    color: #fff;
    background: rgba(0, 0, 0, 0.9);
    transform: ${({ displayInfo }) =>
      displayInfo ? "translate3d(0, 0, 0)" : "translate3d(100%, 0, 0)"};
    transition: transform 0.5s ease;
  }
`;

export const Description = styled.p`
  font-weight: 300;
  line-height: 1.45;
`;

export const TechList = styled.div.attrs({
  className: "row"
})`
  display: flex;
  padding: 0 15px;
  font-size: 0.8em;
`;

export const Tech = styled.span`
  padding: 2px 5px;
  margin: 0 6px 6px 0;
  border: 1px solid #ff4e50;
  color: #ff4e50;
`;

export const LinksWrapper = styled.div.attrs({
  className: "row justify-content-center featured-project-links"
})`
  width: 100%;
  margin-top: 100px;
  font-weight: 500;
`;

export const ProjectLinks = StyledLink.extend`
  padding: 5px 0;
  border-bottom: 3px solid transparent;
  transition: border 0.25s ease;
  margin: 0 2em;

  &:hover {
    border-bottom: 3px solid #000;
  }
`;
