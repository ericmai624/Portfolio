import styled from "styled-components";

const Div = styled.div.attrs({
  className: "row justify-content-center"
})``;

const Container = styled(Div)`
  @media screen and (min-width: 992px) {
    &&& {
      padding: 0 calc(100% / 12);
    }
  }
`;

export default Container;
