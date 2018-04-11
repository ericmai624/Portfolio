import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  align-items: center;
  background: #d4d4d4;
  padding: 0 10px;
  height: 20px;
  border-radius: 4px 4px 0 0;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 4px 4px;
  overflow: hidden;
  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const MockBtn = styled.span`
  border-radius: 50%;
  background: ${({ color }) => color};
  width: 12px;
  height: 12px;
  margin-right: 5px;
`;

export const Screenshot = styled.img`
  width: 100%;
  transition: all 0.6s ease-in-out;
`;
