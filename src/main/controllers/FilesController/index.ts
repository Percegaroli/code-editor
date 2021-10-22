/* eslint-disable class-methods-use-this */
import { ipcMain } from 'electron';
import { SavingFileData } from 'shared/Model/SavingFileData';
import FilesService from '../../services/FilesService';
import { FileEvents } from './enum';

class FilesController {
  private filesService = new FilesService();

  constructor() {
    this.listenToLoadDirectory();
    this.listenToOpenFile();
    this.listenToSaveFile();
  }

  listenToLoadDirectory() {
    ipcMain.handle(FileEvents.LOAD_DIRECTORY, () => {
      return this.filesService.loadDirectory();
    });
  }

  listenToOpenFile(){
    ipcMain.handle(FileEvents.OPEN_FILE, (_, filePath: string) => {
      return this.filesService.openFile(filePath);
    })
  }

  listenToSaveFile(){
    ipcMain.handle(FileEvents.SAVE_FILE, (_, file: SavingFileData) => {
      return this.filesService.saveFile(file);
    })
  }
}

export default FilesController;
