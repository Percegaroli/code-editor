import React, { useContext } from 'react';
import { Container, TabItem, FileName, StyledFileIcon, CloseButton } from './styles';
import { IoMdClose } from 'react-icons/io';
import { CodeTabContext, CodeTabManagerContext } from 'renderer/modules/CodeEditor/context/TabContext';
import { TabContextActionTypes } from 'renderer/modules/CodeEditor/state/TabState/actionTypes';
import { FileExtension } from '../../atoms/FileIcon/FileExtension';

const CodeTabs = () => {
  const { tabs } = useContext(CodeTabContext);
  const dispatch = useContext(CodeTabManagerContext);

  const closeTab = (tabId: string) => dispatch({type: TabContextActionTypes.CLOSE_TAB, tabId})

  return (
    <Container>
      {tabs.map(({id, file}) => (
        <TabItem key={id}>
          <StyledFileIcon fileExtension={file.extension as FileExtension} width={12} height={12} />
          <FileName>{file.name}</FileName>
          <CloseButton onClick={() => closeTab(id)}>
            <IoMdClose/>
          </CloseButton>
        </TabItem>
      ))}
    </Container>
  );
};

export default CodeTabs;
