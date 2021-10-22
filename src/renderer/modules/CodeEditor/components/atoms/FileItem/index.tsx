import React, { useContext } from 'react';
import { CodeTabManagerContext } from 'renderer/modules/CodeEditor/context/TabContext';
import { TabContextActionTypes } from 'renderer/modules/CodeEditor/state/TabState/actionTypes';
import FileIcon from '../FileIcon';
import { FileExtension } from '../FileIcon/FileExtension';
import { FileItemProps } from './interface';
import { Container, FileName } from './styles';

const FileItem = ({ fileName, selected = false, path }: FileItemProps) => {
  const dispatch = useContext(CodeTabManagerContext);

  const fileNameSplitted = fileName.split('.');
  const fileExtension = `.${
    fileNameSplitted[fileNameSplitted.length - 1]
  }` as FileExtension;

  const requestToOpenFile = async () => {
    try {
      const fileContent = await window.files.openFile(path);
      dispatch({
        type: TabContextActionTypes.OPEN_TAB,
        payload: {
          file: {
            extension: fileExtension,
            name: fileName,
            path,
          },
          initialValue: fileContent,
        },
      });
    } catch (err) {}
  };

  return (
    <Container active={selected} onClick={requestToOpenFile}>
      <FileIcon fileExtension={fileExtension} />
      <FileName active={selected}>{fileName}</FileName>
    </Container>
  );
};

export default FileItem;
