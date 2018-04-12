import styled from "styled-components";

export const Section = styled.section.attrs({
  className: "container"
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 2em;
  font-weight: 700;
  color: #464646;
`;
