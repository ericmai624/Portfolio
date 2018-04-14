import styled from "styled-components";

const Container = styled(styled.div.attrs({
  className: "row justify-content-center additional-projects"
})`
  visibility: hidden;
  width: 100%;
`)`
  @media screen and (min-width: 992px) {
    &&& {
      padding: 0 calc(100% / 12);
    }
  }
`;

export default Container;
