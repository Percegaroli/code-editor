import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.color.purple[1000]};
  padding: 12px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Button = styled.button`
  border-radius: 100%;
  width: 20px;
  height: 20px;
  border: none;
  outline: none;
  background-color: ${(props) => props.color};
`;

export const ButtonContainer = styled.div`
  display: flex;
  column-gap: 8px;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.color.gray[300]};
  font-size: ${(props) => props.theme.fontSize.md};
  width: 100%;
  text-align: center;
  font-weight: 500;
  -webkit-app-region: drag;
`;
