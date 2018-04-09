import styled from 'styled-components';

const Button = styled.button`
  position: relative;
  display: inline-block;
  padding: 0;
  margin-right: 1em;
  outline: none;
  border: none;
  text-decoration: underline;
  cursor: pointer;
  background: transparent;
  color: #000;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: ${({ isHovered }) => (isHovered ? '100%' : 0)};
    height: 100%;
    background: #d2d3d5;
    transition: width 0.25s ease-in-out;
    z-index: -1;
  }
`;

export default Button;
