import styled from 'styled-components';

const StyledLink = styled.a`
  outline: none;
  text-decoration: underline!important;
  color: #fff!important;
  cursor: pointer;
  transition: background 0.25s linear;

  &:hover {
    background: #282c34;
  }
`;

export default StyledLink;
