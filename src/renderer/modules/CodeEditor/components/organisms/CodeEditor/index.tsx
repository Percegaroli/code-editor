/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext, useEffect, useRef } from 'react';
import { EditorState, Editor } from 'draft-js';
import useActiveTab from 'renderer/modules/CodeEditor/hooks/useActiveTab';
import { CodeTabManagerContext } from 'renderer/modules/CodeEditor/context/TabContext';
import { TabContextActionTypes } from 'renderer/modules/CodeEditor/state/TabState/actionTypes';
import CodeEditorService from 'renderer/modules/CodeEditor/service/CodeEditorService';
import Scrollbars from 'react-custom-scrollbars';
import { Container } from './styles';

const CodeEditor = () => {
  const activeTab = useActiveTab();
  const dispatch = useContext(CodeTabManagerContext);
  const activeTabRef = useRef(activeTab);

  useEffect(() => {
    activeTabRef.current = activeTab;
  }, [activeTab]);

  const onSaveFile = async (event: KeyboardEvent) => {
    if (
      event.code === 'KeyS' &&
      event.ctrlKey &&
      activeTabRef.current &&
      activeTabRef.current.hasChanges
    ) {
      try {
        const { state, file, id } = activeTabRef.current;
        const content = CodeEditorService.formatStateToString(state);
        const hasSaved = await window.files.saveFile({
          content,
          path: file.path,
        });
        if (hasSaved) {
          dispatch({
            type: TabContextActionTypes.ON_SAVE_SUCCESSFULLY,
            payload: { id },
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keypress', onSaveFile);
    return () => window.removeEventListener('keypress', onSaveFile);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onTextChange = (newState: EditorState) => {
    if (activeTab) {
      const { id } = activeTab;
      dispatch({
        type: TabContextActionTypes.CHANGE_CODE_STATE,
        payload: {
          id,
          newState,
        },
      });
    }
  };

  return activeTab ? (
    <Scrollbars autoHide autoHideTimeout={500}>
      <Container>
        <Editor editorState={activeTab.state} onChange={onTextChange} />
      </Container>
    </Scrollbars>
  ) : null;
};

export default CodeEditor;
