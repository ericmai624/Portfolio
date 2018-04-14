import styled, { keyframes } from "styled-components";

export const StyledLink = styled.a`
  cursor: pointer;
  outline: none;
  color: inherit;
  text-align: center;
  text-decoration: none;
`;

export const StyledButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Emoji = styled.span.attrs({
  role: "img",
  "aria-label": "emoji"
})`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export const Type = keyframes`
  50% {
    border-color: transparent;
  }
`;

export const slowFadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }

  40% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;
