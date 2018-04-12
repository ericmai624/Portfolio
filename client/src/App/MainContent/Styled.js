import styled from "styled-components";

export const Section = styled.section.attrs({
  className: "container"
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-bottom: 200px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 2em;
  font-weight: 700;
  color: #464646;
`;
