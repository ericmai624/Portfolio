import styled from "styled-components";
import { StyledLink, StyledButton } from "src/App/Common/Styled";

export const CardContainer = styled.div.attrs({
  className: "col-6 col-lg-3"
})`
  width: 100%;
  height: 330px;
  padding: 1em;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;
  padding: 1em;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.19);
  background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);
`;

export const Description = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GithubLogoContainer = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RepoName = styled.span`
  position: relative;
  display: inline-block;
  width: auto;
  padding: 0.5em 1em;
  text-align: center;
  margin-bottom: 1em;
  color: #1d2328;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 25%;
    transform: translate3d(-50%, 0, 0);
    border-bottom: 2px solid #1d2328;
  }
`;

export const RepoDesc = styled.span`
  font-size: 0.9em;
  color: #575a5c;
  text-align: center;
  width: 100%;
`;

export const Button = StyledButton.extend`
  color: #fff;
  padding: 0.8em;
  border-radius: 5px;
  font-size: 0.9em;
  background: #1f2b3b;
  transition: all 0.25s ease;

  &:hover {
    background: #ff4e50;
    color: #fff;
  }
`;

export const GithubLink = StyledLink.extend``;
