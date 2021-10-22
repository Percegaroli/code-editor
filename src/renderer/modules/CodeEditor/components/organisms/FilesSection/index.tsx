import { Scrollbars } from 'react-custom-scrollbars';
import React, { useState } from 'react';
import { Folder } from 'shared/Model/Folder';
import { Container } from './styles';
import FolderItem from '../../molecules/FolderItem';
import FileItem from '../../atoms/FileItem';

const FilesSection = () => {
  const [folderContent, setFolderContent] = useState<Folder | null>();

  const loadFiles = async () => {
    try {
      const response = await window.files.loadDirectory();
      setFolderContent(response);
    } catch (err) {}
  };

  return (
    <Container>
      <Scrollbars autoHide autoHideTimeout={500}>
        <button onClick={loadFiles} type="button">
          Select
        </button>
        {folderContent?.folders.map((folder) => (
          <FolderItem folderItems={folder} />
        ))}
        {folderContent?.files.map((file) => (
          <FileItem key={file.name} fileName={file.name} path={file.path} />
        ))}
      </Scrollbars>
    </Container>
  );
};

export default FilesSection;
