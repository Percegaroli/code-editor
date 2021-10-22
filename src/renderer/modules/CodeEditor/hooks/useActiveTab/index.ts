import { useContext, useMemo } from 'react';
import { CodeTabContext } from '../../context/TabContext';

const useActiveTab = () => {
  const state = useContext(CodeTabContext);

  return useMemo(() => {
    if (state.activeId) {
      return state.tabs.find((tab) => tab.id === state.activeId);
    }
    return undefined;
  }, [state]);
};

export default useActiveTab;
