import styled from 'styled-components';

export const Container = styled.div`

`;

export const Letter = styled.span`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.25s ease-in-out;
`;
