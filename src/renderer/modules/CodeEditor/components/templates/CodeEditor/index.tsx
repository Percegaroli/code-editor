import React from 'react';
import CodeTabs from '../../molecules/CodeTabs';
import CodeEditor from '../../organisms/CodeEditor';
import FilesSection from '../../organisms/FilesSection';
import { Container, ContentContainer } from './styles';

const CodeEditorTemplate = () => {
  return (
    <Container>
      <FilesSection />
      <ContentContainer>
        <CodeTabs />
        <CodeEditor />
      </ContentContainer>
    </Container>
  );
};

export default CodeEditorTemplate;
