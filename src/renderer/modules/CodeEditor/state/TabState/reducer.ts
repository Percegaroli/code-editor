import { ContentState, EditorState } from 'draft-js';
import PrismDecorator from 'draft-js-prism';
import Prism from 'prismjs';
import { v4 } from 'uuid';
import { TabContextActionTypes } from './actionTypes';
import { CodeTabReducerAction, CodeTabState } from './interface';

const decorator = new PrismDecorator({
  prism: Prism,
});

const createEditorStateFromString = (text: string) =>
  EditorState.createWithContent(ContentState.createFromText(text), decorator);

const TabStateReducer = (
  state: CodeTabState,
  action: CodeTabReducerAction
): CodeTabState => {
  switch (action.type) {
    case TabContextActionTypes.OPEN_TAB: {
      const tabAlreadyCreated = state.tabs.find(
        (tab) => tab.file.path === action.payload.file.path
      );
      if (tabAlreadyCreated) {
        return {
          ...state,
          activeId: tabAlreadyCreated.id,
        };
      }
      const id = v4();
      return {
        ...state,
        tabs: [
          ...state.tabs,
          {
            state: createEditorStateFromString(action.payload.initialValue),
            file: action.payload.file,
            id,
            hasChanges: false,
          },
        ],
        activeId: id,
      };
    }
    case TabContextActionTypes.CLOSE_TAB: {
      const newTabs = state.tabs.filter((tab) => tab.id !== action.tabId);
      return {
        ...state,
        tabs: newTabs,
        activeId: newTabs.length ? newTabs[0].id : '',
      };
    }
    case TabContextActionTypes.CHANGE_CODE_STATE: {
      const { id, newState } = action.payload;
      const editingStateIndex = state.tabs.findIndex(tab => tab.id === id);
      const tabsCopy = [...state.tabs]
      tabsCopy[editingStateIndex] = {
        ...tabsCopy[editingStateIndex] ,
        state: newState,
        hasChanges: true
      }
      return {
        ...state,
        tabs: tabsCopy
      }
    }
    case TabContextActionTypes.ON_SAVE_SUCCESSFULLY: {
      const { id } = action.payload;
      const editingStateIndex = state.tabs.findIndex(tab => tab.id=== id);
      const tabsCopy = [...state.tabs];
      tabsCopy[editingStateIndex].hasChanges = false;
      return {
        ...state,
        tabs: tabsCopy
      }
    }
    default:
      return state;
  }
};

export default TabStateReducer;
