import styled from "styled-components";
import { StyledLink } from "src/App/Common/Styled";

export const FooterContainer = styled.div.attrs({
  className: "container"
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 15px;
`;

export const SocialMedia = styled.div.attrs({
  className: "row justify-content-around align-items-center"
})`
  width: 200px;
  font-size: 1.5em;
`;

export const Copyright = styled.div.attrs({
  className: "row justify-content-center align-items-center"
})`
  font-size: 0.8em;
  margin-top: 2em;
`;

export const SocialMediaLink = StyledLink.extend`
  transition: color 0.2s ease;

  &:hover {
    color: #ff4e50;
  }
`;

export const Heart = styled.span`
  color: #ff4e50;
`;
