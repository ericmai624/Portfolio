import styled from "styled-components";

const Container = styled.div`
  position: relative;
  font-family: "Lato", sans-serif;
  width: 100%;
  transition: opacity 1s ease-in-out;

  & section {
    user-select: text;
  }
`;

export default Container;
