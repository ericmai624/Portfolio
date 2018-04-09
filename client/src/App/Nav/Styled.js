import styled from 'styled-components';

const NavContainer = styled.div`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  font-size: 0.5em;
`;

export default NavContainer;
