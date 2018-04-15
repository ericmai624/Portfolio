import styled from "styled-components";
import { StyledLink, StyledButton } from "src/App/Common/Styled";

export const CardContainer = styled(styled.div.attrs({
  className: "col-12 col-sm-4"
})`
  position: relative;
  height: 0;
  overflow: hidden;
`)`
  &&& {
    padding: 0;
    @media screen and (min-width: 1200px) {
      padding-top: calc(100% / 12 * 4 * 0.75);
    }
    @media screen and (max-width: 1200px) {
      padding-top: calc(100% / 12 * 4);
    }
    @media screen and (max-width: 768px) {
      padding-top: calc(100% / 12 * 8 * 0.75);
    }
    @media screen and (max-width: 576px) {
      padding-top: calc(100% * 0.5625);
    }
  }
`;

export const InnerWrapper = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  bottom: 5px;
  left: 5px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding: 1em 0;
  align-items: center;
  background: rgba(232, 236, 244, 0.5);
`;

export const Description = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GithubLogoContainer = styled.div`
  width: 100%;
  height: 45%;
  font-size: 3em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 15%;
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
  font-size: 0.85em;
  font-weight: 600;

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
  padding: 0.7em;
  border-radius: 3px;
  font-size: 0.75em;
  background: #1f2b3b;
  transition: all 0.25s ease;

  &:hover {
    background: ${({ theme }) => theme.main};
    color: #fff;
  }
`;

export const GithubLink = StyledLink.extend``;
