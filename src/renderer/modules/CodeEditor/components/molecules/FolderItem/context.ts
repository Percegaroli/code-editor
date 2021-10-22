import { createContext } from 'react';

interface IFolderItemContext {
  depth: number;
}

export const FolderItemContext = createContext<IFolderItemContext>({
  depth: 0,
});

export default {};
