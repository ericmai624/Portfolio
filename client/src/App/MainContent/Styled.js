import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  font-family: "Lato", sans-serif;
  width: 100%;
  transition: opacity 1s ease-in-out;

  & section {
    user-select: text;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 2em;
  font-weight: 700;
  color: #464646;
`;

export const ProjectContainer = styled.div`
  margin-top: 25px;
  padding: 1em 15px;
`;
