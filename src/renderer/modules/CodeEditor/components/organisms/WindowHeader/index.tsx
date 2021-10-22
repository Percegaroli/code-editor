import React from 'react';
import useActiveTab from 'renderer/modules/CodeEditor/hooks/useActiveTab';
import WindowService from 'renderer/shared/services/WindowService';
import { Button, ButtonContainer, Container, Title } from './styles';

const WindowHeader = () => {
  const activeTab = useActiveTab();

  return (
    <Container>
      <Title>
        {activeTab ? `${activeTab.file.name} / ` : null}
        Code Editor
      </Title>
      <ButtonContainer>
        <Button color="#38D37F" onClick={WindowService.hide}/>
        <Button color="#D5D849" onClick={WindowService.maximize}/>
        <Button color="#C42424" onClick={WindowService.close}/>
      </ButtonContainer>
    </Container>
  );
};

export default WindowHeader;
