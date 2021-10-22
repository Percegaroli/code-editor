import React, { useContext, useState } from 'react';
import {
  AiFillFolderOpen,
  AiFillFolder,
  AiOutlineRight,
  AiOutlineDown,
} from 'react-icons/ai';
import { useTheme } from 'styled-components';
import FileItem from '../../atoms/FileItem';
import { FolderItemContext } from './context';
import { FolderItemProps } from './interface';
import { Container, FolderName, ChildrenContainer } from './styles';

const FolderItem = ({ folderItems }: FolderItemProps) => {
  const theme = useTheme();
  const folderContext = useContext(FolderItemContext);
  const [isOpen, setIsOpen] = useState(false);

  const renderChildren = () => {
    if (isOpen) {
      return (
        <FolderItemContext.Provider value={{ depth: folderContext.depth + 1 }}>
          <ChildrenContainer depth={folderContext.depth + 1}>
            {folderItems.folders.map((folder) => (
              <FolderItem folderItems={folder} key={folder.name} />
            ))}
            {folderItems.files.map((file) => (
              <FileItem fileName={file.name} key={file.name} path={file.path}/>
            ))}
          </ChildrenContainer>
        </FolderItemContext.Provider>
      );
    }
    return null;
  };

  return (
    <>
      <Container
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <>
            <AiOutlineDown
              color={theme.color.gray[300]}
              width={16}
              height={16}
            />
            <AiFillFolderOpen
              color={theme.color.gray[300]}
              width={16}
              height={16}
            />
          </>
        ) : (
          <>
            <AiOutlineRight
              color={theme.color.gray[300]}
              width={16}
              height={16}
            />
            <AiFillFolder
              color={theme.color.gray[300]}
              width={16}
              height={16}
            />
          </>
        )}
        <FolderName active={isOpen}>{folderItems.name}</FolderName>
      </Container>
      {renderChildren()}
    </>
  );
};

export default FolderItem;
