import styled from "styled-components";

const lightGrey = "#d4d4d4";

export const Container = styled.div`
  & .info {
    font-weight: 300;
    line-height: 1.45;
  }

  & .techstacks {
    font-size: 0.9em;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  background: ${lightGrey};
  padding: 0 10px;
  height: 20px;
  border-radius: 4px 4px 0 0;
`;

export const MockBtn = styled.span`
  border-radius: 50%;
  background: ${({ color }) => color};
  width: 12px;
  height: 12px;
  margin-right: 5px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 4px 4px;
  overflow: hidden;
  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const Screenshot = styled.img`
  width: 100%;
`;

export const TechStack = styled.span`
  padding: 2px 5px;
  margin: 0 3px;
  background: #f3efef;
`;
