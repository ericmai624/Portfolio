import styled from "styled-components";

const getHeight = (isFluid, isHeadline) => {
  if (isHeadline) {
    return "200px";
  }

  return isFluid ? "auto" : "100%";
};

export const Section = styled.section.attrs({
  className: "container"
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: ${({ fluid, headline }) => getHeight(fluid, headline)};
  margin-bottom: ${({ headline }) => (headline ? 0 : "200px")};

  &:first-of-type {
    margin-bottom: 0;
  }
`;

export const Title = styled.h2`
  position: relative;
  margin: 0;
  font-size: 1em;
  font-weight: 700;
  line-height: 2.5em;
  color: #464646;

  &::after {
    position: absolute;
    content: "";
    display: inline-block;
    left: 50%;
    bottom: 0;
    width: 25%;
    transform: translate3d(-50%, 0, 0);
    border-bottom: 2px solid #ff4e50;
  }
`;
