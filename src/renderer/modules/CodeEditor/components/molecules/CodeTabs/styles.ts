
import HeadlessButton from 'renderer/shared/components/HeadlessButton';
import styled from 'styled-components';
import FileIcon from '../../atoms/FileIcon';

interface Props {
  activeTab?: boolean;
}

export const Container = styled.ul`
  display: flex;
`;

export const TabItem = styled.li`
  padding: 4px 12px;
  display: flex;
  column-gap: 8px;
  align-items: center;

  &:not(:last-child) {
    border-right: 1px solid ${({ theme }) => theme.color.purple[400]};
  }
`;

export const FileName = styled.h4<Props>`
  color: ${(props) =>
    props.activeTab
      ? props.theme.color.gray[300]
      : props.theme.color.gray[600]};
  font-size: ${({ theme }) => theme.fontSize.xxs};
`;

export const StyledFileIcon = styled(FileIcon)`
  width: 12px;
  height: 12px;
`;

export const CloseButton = styled(HeadlessButton)`
  border-radius: 8px;
  padding: 4px;
  color: red;
`;
