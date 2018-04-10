import styled from 'styled-components';
import { StyledLink } from 'src/App/Common/Styled';

export const SiteNav = styled.nav`
  display: flex;
  margin: 134px 0;

  @media screen and (max-width:992px) {
    margin: 32.5px 0;
  }
`;

export const HeaderLink = StyledLink.extend`
  margin-right: 1em;

  &:hover {
    color: orange;
  }
`;

export const Initial = styled.span`
  font-weight: 700;
  font-size: 1.5em;
`;
