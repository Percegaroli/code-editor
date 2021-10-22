import styled from 'styled-components';

interface Props {
  active: boolean;
}

export const Container = styled.div<Props>`
  display: flex;
  align-items: center;
  padding: 8px 0;
  width: 100%;
  background-color: ${(props) =>
    props.active ? props.theme.color.purple[500] : 'transparent'};
  box-shadow: ${(props) => (props.active ? '0px 0px 4px #2d0043' : 'none')};
  column-gap: 12px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.color.purple[500]};
    box-shadow: 0px 0px 4px #2d0043;
  }
`;

export const FileName = styled.h6<Props>`
  color: ${(props) =>
    props.active ? props.theme.color.gray[100] : props.theme.color.gray[600]};
  font-weight: 300;
  font-size: ${(props) => props.theme.fontSize.xxs};
`;
