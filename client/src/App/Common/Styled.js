import styled, { keyframes } from "styled-components";

export const StyledLink = styled.a`
  cursor: pointer;
  outline: none;
  color: inherit;
  text-decoration: none;
`;

export const Type = keyframes`
  50% {
    border-color: transparent;
  }
`;

export const Emoji = styled.span.attrs({
  role: "img",
  "aria-label": "emoji"
})`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;
