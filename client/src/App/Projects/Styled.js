import styled from "styled-components";
import { StyledLink } from "src/App/Common/Styled";
import { Link } from "react-router-dom";

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

export const DescrWrapper = styled.div`
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
    background: ${({ theme }) => theme.main};
    cursor: pointer;
    opacity: ${({ displayInfo }) => (displayInfo ? 1 : 0)};
    transition: opacity 0.25s ease;
  }
`;

export const ProjectName = styled.h2`
  @media screen and (min-width: 992px) {
    color: #fff;
    opacity: ${({ displayInfo }) => (displayInfo ? 1 : 0)};
    transform: ${({ displayInfo }) =>
      displayInfo ? "translate3d(0, 0, 0)" : "translate3d(-40px, 0, 0)"};
    transition: opacity 0.25s ease-in,
      transform 0.5s cubic-bezier(0.694, 0, 0.335, 1);
  }
`;

export const TechStacks = styled.div.attrs({
  className: "row"
})`
  display: flex;
  padding: 0.5em 15px;
  font-size: 0.8em;
  color: ${({ theme }) => theme.main};

  @media screen and (min-width: 992px) {
    color: #fff;
    opacity: ${({ displayInfo }) => (displayInfo ? 1 : 0)};
    transform: ${({ displayInfo }) =>
      displayInfo ? "translate3d(0, 0, 0)" : "translate3d(-40px, 0, 0)"};
    transition: opacity 0.5s ease-in,
      transform 1s cubic-bezier(0.694, 0, 0.335, 1);
  }
`;

export const Tech = styled.span`
  padding: 2px 5px;
  margin: 0 6px 6px 0;
  color: inherit;
  border: 1px solid ${({ theme }) => theme.main};

  @media screen and (min-width: 992px) {
    border: 1px solid #fff;
  }
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
    cursor: pointer;
  }
`;

export const DevProcessLink = styled(Link)`
  padding: 5px 0;
  border-bottom: 3px solid transparent;
  transition: border 0.25s ease;
  margin: 0 2em;
  cursor: pointer;
  outline: none;
  color: inherit;
  text-align: center;
  text-decoration: none;

  &:hover {
    border-bottom: 3px solid #000;
    cursor: pointer;
  }
`;
