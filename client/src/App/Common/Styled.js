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

export const ProjectInfo = styled.p`
  font-weight: 300;
  line-height: 1.45;
`;

export const ProjectTSList = styled.div`
  display: flex;
  padding: 0 15px;
  font-size: 0.8em;
`;

export const ProjectTS = styled.span`
  padding: 2px 5px;
  margin: 0 6px 6px 0;
  border: 1px solid #ff4e50;
  color: #ff4e50;
`;
