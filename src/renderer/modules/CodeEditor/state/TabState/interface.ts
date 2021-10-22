import { EditorState } from 'draft-js';
import { Dispatch } from 'react';
import { File } from 'shared/Model/File';
import { TabContextActionTypes } from './actionTypes';

export type ICodeTabContext = CodeTabState;

export type ICodeTabManagerContext = Dispatch<CodeTabReducerAction>;

export interface Tab {
  state: EditorState;
  hasChanges: boolean;
  id: string;
  file: File;
}

export interface CodeTabState {
  tabs: Array<Tab>;
  activeId: string;
}

export type CodeTabReducerAction =
  | {
      type: TabContextActionTypes.OPEN_TAB;
      payload: {
        initialValue: string;
        file: File;
      };
    }
  | { type: TabContextActionTypes.CLOSE_TAB; tabId: string }
  | {
      type: TabContextActionTypes.CHANGE_CODE_STATE;
      payload: {
        id: string;
        newState: EditorState;
      };
    }
  | {
      type: TabContextActionTypes.ON_SAVE_SUCCESSFULLY;
      payload: { id: string };
    };
