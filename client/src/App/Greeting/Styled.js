import styled from 'styled-components';

export const Landing = styled.div`
  position: absolute;
  top: 50%;
  left: 25%;
  transform: translateY(-50%);
  font-size: 2.3em;

  @media screen and (max-width:992px) {
    display: flex;
    flex-direction: column;
    left: 0;
    width: 100%;
    align-items: center;
  }
`;

export const MsgContainer = styled.div`
  display: inline-block;
  margin-bottom: 0.5em;  
`;
