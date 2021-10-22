import 'prismjs/themes/prism.css';
import React, { createContext, useReducer } from 'react';
import {
  ICodeTabManagerContext,
  CodeTabState,
  ICodeTabContext,
} from '../../state/TabState/interface';
import TabStateReducer from '../../state/TabState/reducer';

export const CodeTabContext = createContext({} as ICodeTabContext);

export const CodeTabManagerContext = createContext(
  {} as ICodeTabManagerContext
);

export const CodeTabContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(TabStateReducer, {
    activeId: '',
    tabs: [],
  } as CodeTabState);

  return (
    <CodeTabContext.Provider value={state}>
      <CodeTabManagerContext.Provider value={dispatch}>
        {children}
      </CodeTabManagerContext.Provider>
    </CodeTabContext.Provider>
  );
};
