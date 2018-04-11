import styled from "styled-components";

export const Container = styled.div.attrs({
  className: "row"
})`
  position: relative;
  padding: 0 15px;
`;

export const DetailContainer = styled.div`
  width: 100%;

  @media screen and (min-width: 992px) {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 20px;
    right: 15px;
    width: calc(100% - (100% / 1.618));
    height: calc(100% - 20px);
    padding: 0 1em;
    overflow: hidden;
    color: #fff;
    background: rgba(0, 0, 0, 0.9);
    transform: ${({ displayInfo }) =>
      displayInfo ? "none" : "translate3d(100%, 0, 0)"};
    transition: transform 0.5s ease-in-out;
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

export const SeeItOnGithub = styled.div.attrs({
  className: "row justify-content-center"
})`
  margin: 50px 0;
`;
