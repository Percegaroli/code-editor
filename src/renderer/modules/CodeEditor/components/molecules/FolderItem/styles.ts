import styled from 'styled-components';

interface Props {
  active: boolean;
}

interface ChildrenContainerProps {
  depth: number;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
  width: 100%;
  column-gap: 12px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.color.purple[500]};
    box-shadow: 0px 0px 4px #2d0043;
  }
`;

export const FolderName = styled.h6<Props>`
  color: ${(props) =>
    props.active ? props.theme.color.gray[100] : props.theme.color.gray[600]};
  font-weight: 300;
  font-size: ${(props) => props.theme.fontSize.xxs};
`;

export const ChildrenContainer = styled.div<ChildrenContainerProps>`
  padding-left: ${(props) => `${props.depth * 8}px`};
`;
