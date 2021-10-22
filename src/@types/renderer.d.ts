import { SavingFileData } from 'shared/Model/SavingFileData';
import { Folder } from 'shared/Model/Folder';

export interface FilesAPI {
  loadDirectory: () => Promise<Folder>;
  openFile: (filePath: string) => Promise<string>;
  saveFile: (file: SavingFileData) => Promise<boolean>;
}

export interface AppApi {
  closeApp: () => void;
  hideApp: () => void;
  maximizeApp: () => void;
}

declare global {
  interface Window {
    files: FilesAPI;
    app: AppApi;
  }
}
